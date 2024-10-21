import { HeaderWrapper } from "./Reusable.styled";
import { FaBuildingColumns } from "react-icons/fa6";
import { HeaderProps } from "../../types";

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderWrapper>
      {/* head */}
      <h1 className="text-4xl mb-4 text-red-400 font-extralight">{title}</h1>
      <div className="flex items-center">
        <span className="bg-green-700 w-24 h-[2px]"></span>
        <FaBuildingColumns className="mx-4" color="green" />
        <span className="bg-green-700 w-24 h-[2px]"></span>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
