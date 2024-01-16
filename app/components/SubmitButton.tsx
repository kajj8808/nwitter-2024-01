import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "@lib/client/utile";

function SubmitButton({
  text,
  isLoading,
  error,
}: {
  text: string;
  isLoading?: boolean;
  error: string;
}) {
  return (
    <div>
      <button
        type="submit"
        className={cls(
          "mt-16 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-4 font-bold md:w-[420px] ",
          isLoading ? "bg-gray-400" : "bg-primary text-white",
        )}
      >
        {isLoading ? (
          <div className="animate-pulse">
            <FontAwesomeIcon icon={faEllipsis} size="xl" color="white" />
          </div>
        ) : (
          <span>{text}</span>
        )}
      </button>
      <div className="text-center">
        <span className="text-sm text-red-500">{error}</span>
      </div>
    </div>
  );
}

export default SubmitButton;
