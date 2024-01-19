import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseFormRegisterReturn } from "react-hook-form";

function TweetImageButton({ register }: { register: UseFormRegisterReturn }) {
  return (
    <>
      <label htmlFor="file" className="cursor-pointer">
        <FontAwesomeIcon icon={faImage} className="text-primary" />
      </label>
      <input
        {...register}
        type="file"
        id="file"
        accept="image/*"
        className="hidden"
      />
    </>
  );
}

export default TweetImageButton;
