import { cls } from "@lib/client/utile";

function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="mt-11 flex w-96 items-center justify-center gap-2 rounded-full bg-blue-300 py-4 font-bold text-white">
      <span>가입</span>
    </div>
  );
}

export default SubmitButton;
