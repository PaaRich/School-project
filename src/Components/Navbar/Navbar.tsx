import { NavbarWrapper } from "./Navbar.styled";
import { SolidNavWrapper } from "./Navbar.styled";
import logo from "../../assets/Casablanca_Logo.jpg";
import TopNavbar from "./TopNavbar";
import { NavLink } from "react-router-dom";
//import NavDrop from "./NavDrop";
//import aboutImg from "../../assets/Casablanca_Logo.jpg";
//import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
//import lists from "../../utils";

const Navbar = () => {
  //const [isOpen, setIsOpen] = useState(true);

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

              <NavLink className="mr-4" to="/">
                HOME
              </NavLink>

              {/* about */}

              <NavLink
                to="/about"
                className="flex items-end mr-4 hover:text-red-700 group"
              >
                ABOUT
                <IoMdArrowDropdown
                  size={23}
                  className="group-hover:rotate-180 duration-300"
                />
              </NavLink>
              {/* display links */}
              {/* {isOpen && <NavDrop img={aboutImg} lists={lists} />} */}

              {/* links */}
              <NavLink className="mr-4" to="/academics">
                ACADEMICS
              </NavLink>
              <NavLink className="mr-4" to="/admission">
                ADMISSION
              </NavLink>
              <NavLink className="mr-4" to="/research">
                RESEARCH
              </NavLink>
              <NavLink className="mr-4" to="/media">
                MEDIA&PRESS
              </NavLink>
              <NavLink className="mr-4" to="/students">
                STUDENTS
              </NavLink>
              <NavLink className="mr-4" to="/staff">
                STAFF
              </NavLink>
              <NavLink className="mr-4" to="/alumini">
                ALUMINI
              </NavLink>
            </div>
          </div>
        </div>
      </NavbarWrapper>
    </SolidNavWrapper>
  );
};

export default Navbar;
