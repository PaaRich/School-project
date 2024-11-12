import { HeaderWrapper } from "./Reusable.styled";
import { FaBuildingColumns } from "react-icons/fa6";
import { HeaderProps } from "../../types";

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderWrapper>
      {/* head */}
      <h1 className="text-4xl mb-2 text-red-800 font-extralight">{title}</h1>
      <div className="flex items-center">
        <span className="bg-green-700 w-32 h-[1px]"></span>
        <FaBuildingColumns className="mx-4" color="green" />
        <span className="bg-green-700 w-32 h-[1px]"></span>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
