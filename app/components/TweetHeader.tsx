import { useState } from "react";
import TweetEllipsisButton from "./TweetEllipsisButton";
import TweetOptionsModal from "./TweetOptionsModal";
import { deleteDoc, doc } from "firebase/firestore";
import { ITweet } from "./TimeLine";
import { auth, db, storage } from "@lib/client/firebase";
import { deleteObject, ref } from "firebase/storage";

function TweetHeader({
  username,
  tweet,
  toggleEditingMode,
}: {
  username: string;
  tweet: ITweet;
  toggleEditingMode: () => void;
}) {
  const [isOpendModal, setIsOpendModal] = useState(false);

  const currentuser = auth.currentUser;

  const openModal = () => {
    setIsOpendModal(true);
  };
  const closeModal = () => {
    setIsOpendModal(false);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      /* docmnet id 값을 찾아서 삭제합니다. */
      try {
        await deleteDoc(doc(db, "tweets", tweet.id));
        if (tweet.photo) {
          const photoRef = ref(
            storage,
            `tweets/${currentuser?.uid}/${tweet.id}`,
          );
          await deleteObject(photoRef);
        }
      } catch (error) {}
    }
  };
  return (
    <div className="relative flex w-full justify-between">
      <span className="text-fontColor font-bold">{username}</span>
      {isOpendModal ? (
        <TweetOptionsModal
          onDeleteClick={onDeleteClick}
          onEditMode={toggleEditingMode}
          closeModal={closeModal}
        />
      ) : (
        <TweetEllipsisButton onClick={openModal} />
      )}
    </div>
  );
}
export default TweetHeader;
