"use client";

import ProfileButton from "./ProfileButton";
import TweetTextArea from "./TweetTextArea";
import TweetSubmitButton from "./TweetSubmitButton";
import TweetImageButton from "./TweetImageButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { cls } from "@lib/client/utile";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { auth, db, storage } from "@lib/client/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface IForm {
  tweet: string;
  photo?: File[];
}

function PostTweetForm() {
  const { register, handleSubmit, setValue, watch, reset } = useForm<IForm>();
  const [isWriting, setIsWriting] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const profileClick = () => {};

  const onValid = async ({ tweet, photo }: IForm) => {
    console.log(tweet);
    const user = auth.currentUser;
    if (isLoading || !user) return;
    try {
      setLoading(true);
      const doc = await addDoc(collection(db, "tweets"), {
        tweet,
        createAt: Date.now(),
        username: user.displayName || "anon",
        userId: user.uid,
      });

      if (photo && photo.length > 0) {
        const locationRef = ref(storage, `tweets/${user.uid}/${doc.id}`);
        const result = await uploadBytes(locationRef, photo[0]);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          photo: url,
          profile: url, // 임시
        });
      }
      setValue("tweet", "");
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="border-blurColor relative flex gap-5 border-b px-4 pt-4"
    >
      <ProfileButton
        photoURL={auth.currentUser?.photoURL}
        onClick={profileClick}
      />
      <div className="flex w-full flex-col overflow-hidden py-2 sm:max-w-lg">
        <TweetTextArea
          register={register("tweet", { required: true, maxLength: 180 })}
          setValue={setValue}
          isWriting={isWriting}
          setIsWriting={setIsWriting}
        />

        <div
          className={cls(
            "border-b",
            isWriting ? "border-gray-500" : "border-background",
          )}
        />
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            <TweetImageButton register={register("photo")} />
          </div>
          <TweetSubmitButton isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
}

export default PostTweetForm;
