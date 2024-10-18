import { NavbarWrapper } from "./Navbar.styled";
import { SolidNavWrapper } from "./Navbar.styled";
import logo from "../../assets/Casablanca_Logo.jpg";
import TopNavbar from "./TopNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <ul className="flex items-center">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1">
                    ABOUT
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow"
                  >
                    <div className="card-body">
                      <h3 className="card-title">Card title!</h3>
                      <p>you can use any element as a dropdown.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </NavbarWrapper>
    </SolidNavWrapper>
  );
};

export default Navbar;
