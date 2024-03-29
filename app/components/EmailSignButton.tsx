function EmailSignButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="bg-primary flex w-72 cursor-pointer items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold text-white shadow-md"
      onClick={onClick}
    >
      <span>계정 만들기</span>
    </div>
  );
}
export default EmailSignButton;
