import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "@lib/client/firebase";
import { cls } from "@lib/client/utile";

function GoogleButton({
  text,
  fullSize,
}: {
  text: string;
  fullSize?: boolean;
}) {
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const data = await signInWithPopup(auth, provider);
      console.log(data);
      //await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      onClick={onClick}
      className={cls(
        "flex cursor-pointer items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold shadow-md",
        fullSize ? "w-full" : "w-72",
      )}
    >
      <FontAwesomeIcon icon={faGoogle} size="xl" />
      <span>구글 {text}</span>
    </div>
  );
}
export default GoogleButton;
