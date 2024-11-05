import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Prop {
  message: string;
}
const Announcement = ({ message }: Prop) => {
  return (
    <div className="border-b-2 py-2">
      <Link className="c-link hover:text-red-800 " to="announcements">
        <FaCircleArrowRight className="inline mr-2" />
        <p className="inline">{message}</p>
      </Link>
    </div>
  );
};

export default Announcement;
