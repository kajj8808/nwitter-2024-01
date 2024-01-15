"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import SignTextInput from "./SignTextInput";
import ModalCloseButton from "./ModalCloseButton";
import { auth } from "@lib/client/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpen ? (
        <form
          onSubmit={handleSubmit(onValid)}
          className="absolute left-0 top-0 flex h-screen w-full items-center justify-center"
        >
          <div className="relative z-30 flex flex-col gap-5 rounded-2xl bg-slate-100 px-16 pb-5 pt-20">
            <h1 className="mb-4 text-3xl font-bold">계정 만들기</h1>
            <SignTextInput register={register("email")} />
            <SignTextInput register={register("password")} />
            <SubmitButton isLoading={isLoading} />
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
