"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import SignTextInput from "./SignTextInput";
import ModalCloseButton from "./ModalCloseButton";
import { auth } from "@lib/client/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import BorderLineOr from "./BorderLineOr";
import GithubButton from "./GitButton";
import GoogleButton from "./GoogleButton";
import { FirebaseError } from "firebase/app";

interface IForm {
  email: string;
  password: string;
}

function LoginModal({
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
      console.log(email, password);
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.message.includes("(auth/invalid-credential)")) {
          setFirebaseError("존재하지 않는 이메일 주소입니다.");
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
          <div className="relative z-30 flex h-full w-full flex-col gap-5 overflow-auto bg-white px-16 pb-5 pt-20 md:h-auto md:max-h-[90vh] md:w-auto md:rounded-2xl">
            <h1 className="mb-3 text-3xl font-bold">로그인</h1>
            <GithubButton fullSize text="로그인" />
            <GoogleButton fullSize text="로그인" />
            <BorderLineOr />
            <SignTextInput register={register("email")} />
            <SignTextInput register={register("password")} />
            <SubmitButton
              text="로그인"
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

export default LoginModal;
