"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import SignTextInput from "./SignTextInput";
import ModalCloseButton from "./ModalCloseButton";
import { auth } from "@lib/client/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirestoreError } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

interface IForm {
  email: string;
  password: string;
}

function EmailSignModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IForm>();
  const [isLoading, setIsLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  const onValid = async ({ email, password }: IForm) => {
    try {
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(credentials.user, {
        displayName: `anon_${new Date().getTime()}`,
      });
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.message.includes("(auth/email-already-in-use)")) {
          setFirebaseError("이미 존재하는 이메일 주소입니다.");
        }
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen ? (
        <form
          onSubmit={handleSubmit(onValid)}
          className="absolute left-0 top-0 flex h-screen w-full items-center justify-center"
        >
          <div className="relative z-30 flex h-full w-full flex-col justify-between overflow-auto bg-white px-16 pb-5 pt-20 md:h-auto md:max-h-[90vh] md:w-auto md:rounded-2xl">
            <div className="flex flex-col gap-5">
              <h1 className="mb-3 text-3xl font-bold">계정 만들기</h1>
              <SignTextInput register={register("email")} />
              <SignTextInput register={register("password")} />
            </div>
            <SubmitButton
              text="가입"
              error={firebaseError}
              isLoading={isLoading}
            />

            <ModalCloseButton onClick={closeModal} />
          </div>
          <div
            className="absolute h-full w-full cursor-pointer bg-[rgba(0,0,0,0.7)]"
            onClick={closeModal}
          ></div>
        </form>
      ) : null}
    </>
  );
}

export default EmailSignModal;
