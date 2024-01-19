import { cls } from "@lib/client/utile";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";

type valueType = {
  tweet: string;
};

function TweetTextArea({
  register,
  isWriting,
  setIsWriting,
  setValue,
  value,
}: {
  register: UseFormRegisterReturn;
  isWriting: boolean;
  setIsWriting: Dispatch<SetStateAction<boolean>>;
  setValue?: any;
  value?: string;
}) {
  const onInput = (e: React.FormEvent<HTMLSpanElement>) => {
    const tweet = e.currentTarget.innerText;
    tweet === "" ? setIsWriting(false) : setIsWriting(true);
    setValue(tweet);
  };

  return (
    <>
      {isWriting ? (
        ""
      ) : (
        <label className="absolute text-lg text-gray-400">
          무슨 일이 일어나고 있나요?
        </label>
      )}
      <span
        {...register}
        contentEditable
        className="text-fontColor z-20 w-full max-w-xs text-lg outline-none sm:max-w-2xl"
        onInput={onInput}
      ></span>
    </>
  );
}

export default TweetTextArea;
