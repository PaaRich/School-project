//import { SideBarProps } from "../../types";
import { SideBarWrapper } from "./Navbar.styled";
import { SideBarProps } from "../../types";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SideBar = ({ title, links }: SideBarProps) => {
  return (
    <SideBarWrapper>
      <div>
        <h1 className="bg-black text-xl text-white py-2 px-4 mb-4 font-bold">
          {title}
        </h1>
        {links?.map((link) => (
          <div className="px-4">
            <h2 className="font-bold my-3">
              {link.subHeading.toLocaleUpperCase()}
            </h2>
            <div className="flex flex-col">
              {link.content.map((aLink) => (
                <NavLink
                  className="pl-2 py-1  hover:bg-slate-200 hover:translate-x-[0.1rem] border-l-2 hover:border-l-red-800 hover:border-l-4 duration-300 text-lg flex items-center justify-between"
                  to={aLink.toLowerCase().replace(/[^a-zA-Z]/g, "")}
                >
                  {aLink}
                  <MdOutlineKeyboardDoubleArrowRight />
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
