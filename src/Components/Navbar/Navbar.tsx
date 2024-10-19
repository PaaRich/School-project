import { NavbarWrapper } from "./Navbar.styled";
import { SolidNavWrapper } from "./Navbar.styled";
import logo from "../../assets/Casablanca_Logo.jpg";
import TopNavbar from "./TopNavbar";
import { NavLink } from "react-router-dom";
import NavDrop from "./NavDrop";
import aboutImg from "../../assets/Casablanca_Logo.jpg";
//import { useState } from "react";
import lists from "./utils";

const Navbar = () => {
  //const [displayNavDrop, setDisplayNavDrop] = useState(true);

  return (
    <SolidNavWrapper>
      <TopNavbar />
      <NavbarWrapper>
        <div className="flex items-center justify-between w-[90%] mx-auto">
          {/* logo */}
          <div>
            <img src={logo} alt="logo" className="w-24" />
          </div>
          {/* links */}
          <div>
            <div className="flex items-center">
              {/* home */}
              <div>
                <NavLink to="/">HOME</NavLink>
              </div>
              {/* about */}
              <div className="c-parent group">
                <span
                //onMouseEnter={() => setDisplayNavDrop(true)}
                //onMouseLeave={() => setDisplayNavDrop(false)}
                >
                  ABOUT
                </span>
                {/* display links */}
                <div className="c-child hidden group-hover:block">
                  <NavDrop img={aboutImg} lists={lists} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavbarWrapper>
    </SolidNavWrapper>
  );
};

export default Navbar;
