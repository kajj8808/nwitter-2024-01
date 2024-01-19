import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TweetOptionsModal({
  onDeleteClick,
  onEditMode,
  closeModal,
}: {
  onDeleteClick: () => void;
  onEditMode: () => void;
  closeModal: () => void;
}) {
  return (
    <>
      <div className="bg-background absolute right-3 top-3 z-20 flex flex-col gap-3 rounded-lg border border-white px-4 py-2">
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={onDeleteClick}
        >
          <FontAwesomeIcon icon={faTrash} size="sm" className="text-white" />
          <span className="font-semibold text-white">게시물 지우기</span>
        </div>
        <div
          className="flex cursor-pointer items-center gap-3 "
          onClick={() => {
            onEditMode();
            closeModal();
          }}
        >
          <FontAwesomeIcon icon={faEdit} size="sm" className="text-white" />
          <span className="font-semibold text-white">게시물 수정하기</span>
        </div>
      </div>
    </>
  );
}

export default TweetOptionsModal;
