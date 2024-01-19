function TweetSubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <div>
      <button className="rounded-full bg-primary px-4 py-1.5 font-semibold text-white">
        {isLoading ? "게시중.." : "게시하기"}
      </button>
    </div>
  );
}

export default TweetSubmitButton;
