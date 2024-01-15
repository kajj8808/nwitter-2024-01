import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "@lib/client/firebase";

function GoogleButton() {
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      //await signInWithPopup(auth, provider);
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex w-72 items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold shadow-md">
      <FontAwesomeIcon onClick={onClick} icon={faGoogle} size="xl" />
      <span>구글 회원가입</span>
    </div>
  );
}
export default GoogleButton;
