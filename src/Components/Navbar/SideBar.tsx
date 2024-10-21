//import { SideBarProps } from "../../types";
import { SideBarWrapper } from "./Navbar.styled";
import { SideBarProps } from "../../types";
const SideBar = ({ title }: SideBarProps) => {
  return (
    <SideBarWrapper>
      {/* <div>
        <h1>{heading}</h1>
        {links?.map((link) => (
          <div>
            <h2>{link.subHeading}</h2>
            {link.content.map(l=>)}
            <div>{link.content}</div>
          </div>
        ))}
      </div> */}
      <h1>{title}</h1>
      SideBar
    </SideBarWrapper>
  );
};

export default SideBar;
