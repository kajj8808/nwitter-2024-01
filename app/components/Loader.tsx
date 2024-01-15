import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loader() {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-full animate-fade items-center justify-center bg-[rgba(0,0,0,0.6)]">
      <FontAwesomeIcon
        icon={faGear}
        className="h-14 w-14 animate-spin text-white"
      />
    </div>
  );
}
export default Loader;
