import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute left-5 top-5 cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon icon={faClose} size="xl" />
    </div>
  );
}

export default ModalCloseButton;
