import { TopNavbarWrapper, Search } from "./Navbar.styled";
import { Link } from "react-router-dom";
import { PiTelegramLogo } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const TopNavbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <TopNavbarWrapper>
      {/* initial links */}
      <div className="max-w-[80%] mx-auto">
        <div className="flex items-center justify-between">
          {/* links */}
          <div>
            <ul className="flex items-center justify-between">
              <li>
                <Link to="check">CHECK ADMISSION STATUS</Link>
              </li>
              <li>
                <Link to="fees">FEES SCHEDULE</Link>
              </li>
              <li>
                <Link to="portal">STUDENTS PORTAL</Link>
              </li>
              <li>
                <Link to="apply-now">APPLY NOW</Link>
              </li>
              <li>
                <Link to="library">LIBRARY</Link>
              </li>
              <li>
                <Link to="help">HELPDESK</Link>
              </li>
              <li>
                <Link to="feedback">FEEDBACK</Link>
              </li>
              <li>
                <Link to="learning-center">E-LEARNING CENTER</Link>
              </li>
            </ul>
          </div>
          {/* searchBtn */}
          <div className="flex items-center">
            <button className="flex items-center mr-4 border-white border-2 rounded-md p-1 hover:underline">
              <PiTelegramLogo size={24} />
              Quick links
            </button>
            <button
              className="flex items-center text-slate-400 hover:text-white duration-300"
              onClick={() => setOpenSearch((v) => !v)}
            >
              <IoSearchSharp size={24} />
              Search
            </button>
          </div>
        </div>
        {/* social media icons */}
        <div className="flex items-center my-2">
          <FaTwitter
            size={25}
            className="mr-5 hover:text-blue-500 duration-300 cursor-pointer"
          />
          <FaFacebookF
            size={25}
            className="mr-5 hover:text-blue-700 duration-300 cursor-pointer"
          />
          <FaInstagram
            size={25}
            className="mr-5 hover:text-red-600 duration-300 cursor-pointer"
          />
          <FaYoutube
            size={25}
            className="mr-5 hover:text-red-600 duration-300 cursor-pointer"
          />
        </div>
      </div>
      {/* dropdown links */}
      <div></div>
      {/* search input */}
      {openSearch && (
        <Search>
          <input type="search" name="search" />
          <span className="mr-2 bg-slate-800 duration-300 cursor-pointer p-2 font-semibold hover:bg-green-500 hover:border-0 ">
            Search
          </span>
          <IoMdClose
            size={24}
            className="bg-slate-700 cursor-pointer hover:scale-125 duration-300 font-bold"
            onClick={() => setOpenSearch(() => false)}
          />
        </Search>
      )}
    </TopNavbarWrapper>
  );
};

export default TopNavbar;
