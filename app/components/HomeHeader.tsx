import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeHeader() {
  return (
    <div className="px-18 flex h-screen w-20 justify-center py-10 sm:w-24">
      <ul>
        <FontAwesomeIcon icon={faHouse} size="xl" className="text-fontColor" />
      </ul>
    </div>
  );
}

export default HomeHeader;
