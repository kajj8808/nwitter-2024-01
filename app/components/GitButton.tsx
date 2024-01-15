import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  GithubAuthProvider,
  linkWithRedirect,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "@lib/client/firebase";

function GithubButton() {
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider); // 에러 확인 할 경우 popup으로!

      //await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex w-72 items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold shadow-md">
      <FontAwesomeIcon
        onClick={onClick}
        icon={faGithub}
        size="xl"
        color="black"
      />
      <span>깃허브 회원가입</span>
    </div>
  );
}
export default GithubButton;
