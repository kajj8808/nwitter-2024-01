"use client";

import { useEffect, useState } from "react";
import { auth } from "@lib/client/firebase";
import GithubButton from "@components/GitButton";
import GoogleButton from "@components/GoogleButton";
import EmailSignButton from "@components/EmailSignButton";
import EmailSignModal from "@components/EmailSignModal";

export default function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const init = async () => {
    await auth.authStateReady();
  };

  useEffect(() => {
    init();
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <EmailSignButton onClick={openModal} />
        <GithubButton />
        <GoogleButton />
        <EmailSignModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
}
