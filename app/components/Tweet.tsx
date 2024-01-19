import ProfileButton from "./ProfileButton";
import { ITweet } from "./TimeLine";
import { auth, db } from "@lib/client/firebase";
import { useState } from "react";
import TweetHeader from "./TweetHeader";
import TweetPhotoContainer from "./TweetPhotoContainer";
import TweetTextArea from "./TweetTextArea";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import TweetSubmitButton from "./TweetSubmitButton";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "firebase-admin";

interface IEditTweet {
  tweet: string;
}

function Tweet({ tweet }: { tweet: ITweet }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<IEditTweet>();

  const toggleEditingMode = () => {
    setIsEditing((prev) => !prev);
  };

  const onValid = async (e: IEditTweet) => {
    setIsLoading(true);

    console.log(e.tweet);
    /*   await updateDoc(doc(db, "tweets", tweet.id), {
      tweet: e.tweet,
    }); */
    setIsLoading(false);
    toggleEditingMode();
  };
  console.log(watch("tweet"));

  return (
    <div
      key={tweet.id}
      className="border-borderColor relative flex w-full gap-3 border-b p-4"
    >
      <ProfileButton onClick={() => null} />
      <div className="flex w-full flex-col content-between">
        <TweetHeader
          username={tweet.username}
          tweet={tweet}
          toggleEditingMode={toggleEditingMode}
        />
        {isEditing ? (
          <form onSubmit={handleSubmit(onValid)}>
            <TweetTextArea
              isWriting={true}
              register={register("tweet")}
              setValue={setValue}
              value={tweet.tweet}
              setIsWriting={setIsWriting}
            />
            <div className="mt-10 flex w-full justify-center">
              <TweetSubmitButton isLoading={isLoading} />
            </div>
          </form>
        ) : (
          <span className="text-fontColor">{tweet.tweet}</span>
        )}
        {tweet.photo ? <TweetPhotoContainer photo={tweet.photo} /> : null}
      </div>
    </div>
  );
}

export default Tweet;
