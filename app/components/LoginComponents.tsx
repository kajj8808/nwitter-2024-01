import { useState } from "react";
import LoginModal from "./LoginModal";

function LoginComponents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onClick = () => {
    openModal();
  };
  return (
    <div className="mt-16">
      <h3 className="font-bold">이미 가입하셨나요?</h3>
      <div
        onClick={onClick}
        className="text-primary mt-3 flex w-72 cursor-pointer items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold shadow-md"
      >
        <span>로그인</span>
      </div>
      <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default LoginComponents;
