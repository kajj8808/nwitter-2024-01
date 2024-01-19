import Image from "next/image";

function TweetPhotoContainer({ photo }: { photo: string }) {
  return (
    <Image
      width={600}
      height={300}
      src={photo}
      alt="tweet image"
      className="shadow-blurColor mt-3 w-full max-w-lg rounded-2xl"
    />
  );
}
export default TweetPhotoContainer;
