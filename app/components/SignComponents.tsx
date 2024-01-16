import { useState } from "react";
import EmailSignButton from "./EmailSignButton";
import EmailSignModal from "./EmailSignModal";
import GithubButton from "./GitButton";
import GoogleButton from "./GoogleButton";
import BorderLineOr from "./BorderLineOr";

function SignComponents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-72">
      <GithubButton text="회원가입" />
      <GoogleButton text="회원가입" />
      <BorderLineOr />
      <EmailSignButton onClick={openModal} />
      <EmailSignModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default SignComponents;
