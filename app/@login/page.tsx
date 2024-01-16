"use client";

import { useEffect, useState } from "react";
import { auth } from "@lib/client/firebase";
import SignComponents from "@components/SignComponents";
import LoginComponents from "@components/LoginComponents";

export default function LoginPage() {
  const init = async () => {
    await auth.authStateReady();
  };

  useEffect(() => {
    init();
  });

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <SignComponents />
      <LoginComponents />
    </div>
  );
}
