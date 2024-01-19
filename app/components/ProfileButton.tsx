import { auth } from "@lib/client/firebase";
import Image from "next/image";

function ProfileButton({
  photoURL,
  onClick,
}: {
  photoURL?: string | null | undefined;
  onClick: () => void;
}) {
  return (
    <>
      {photoURL ? (
        <Image
          src={photoURL}
          className="max-h-10 min-h-10 min-w-10 max-w-10 rounded-full object-cover"
          alt="profile image"
          width={50}
          height={50}
          quality={80}
        />
      ) : (
        <div className="max-h-10 min-h-10 min-w-10 max-w-10 rounded-full bg-primary"></div>
      )}
    </>
  );
}

export default ProfileButton;
