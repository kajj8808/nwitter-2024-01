"use client";
import { logout } from "@lib/client/auth";

function LogoutButton() {
  const onClick = () => {
    logout();
  };
  return <button onClick={onClick}>Logout</button>;
}

export default LogoutButton;
