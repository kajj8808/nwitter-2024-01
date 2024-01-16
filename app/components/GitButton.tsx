import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "@lib/client/firebase";
import { cls } from "@lib/client/utile";

function GithubButton({
  text,
  fullSize,
}: {
  text: string;
  fullSize?: boolean;
}) {
  const onClick = async () => {
    console.log("Error?");
    try {
      const provider = new GithubAuthProvider();
      //await signInWithPopup(auth, provider); // 에러 확인 할 경우 popup으로!
      await signInWithRedirect(auth, provider);
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
      <FontAwesomeIcon icon={faGithub} size="xl" color="black" />
      <span>깃허브 {text}</span>
    </div>
  );
}
export default GithubButton;
