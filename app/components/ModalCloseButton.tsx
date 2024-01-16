import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute left-5 top-4 cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon icon={faClose} size="lg" />
    </div>
  );
}

export default ModalCloseButton;
