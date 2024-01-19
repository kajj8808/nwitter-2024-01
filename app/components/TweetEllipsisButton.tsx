import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TweetEllipsisButton({ onClick }: { onClick: () => void }) {
  return (
    <div>
      <FontAwesomeIcon
        icon={faEllipsis}
        className="text-blurColor cursor-pointer hover:text-white"
        onClick={onClick}
      />
    </div>
  );
}
export default TweetEllipsisButton;
