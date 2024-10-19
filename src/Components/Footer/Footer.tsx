import { FooterWrapper } from "./Footer.styled";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Casablanca_Logo.jpg";

const Footer = () => {
  const footerList: string[] = [
    "Admission Portal",
    "Check Admissions Status",
    "Open Educational Resources",
    "Staff Web Directory",
    "KNUST IT HelpDesk Staff",
    "Staff Mail",
    "Students Mail",
    "Pay Fees Online",
    "Accra Guesthouse",
  ];

  return (
    <FooterWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 max-w-[90%] mx-auto text-white">
        {/* first col */}
        <div>
          <h3 className="text-sm border-b-2 border-b-white pb-3 tracking-widest">
            SUBSCRIBE
          </h3>
          <div>
            {/* email input */}
            <div className="flex flex-col mb-10">
              <input
                type="email"
                name="email"
                className="bg-transparent border-white border-[3px] rounded p-2 focus:outline-0 mt-7"
                placeholder="Your email"
              />
              <FaArrowRightLong
                size={25}
                className="self-end my-2 hover:translate-x-1 duration-300 cursor-pointer"
              />
              <p>Subscribe to our Newsletter</p>
            </div>
            {/* contact us icons */}
            <div>
              <h3 className="text-2xl border-b-2 border-b-white pb-3">
                CONTACT US
              </h3>
              {/* social icons */}
              <div className="flex mt-4">
                <div className="border-r-2 border-r-white pr-2">
                  <FaTwitter
                    size={25}
                    className="hover:text-blue-500 cursor-pointer duration-300"
                  />
                </div>
                <div className="border-r-2 border-r-white px-2">
                  <FaFacebook
                    size={25}
                    className="hover:text-blue-600 cursor-pointer duration-300"
                  />
                </div>
                <div className="border-r-2 border-r-white px-2">
                  <FaInstagram
                    size={25}
                    className="hover:text-red-500 cursor-pointer duration-300"
                  />
                </div>
                <div className="pl-2">
                  <FaYoutube
                    size={25}
                    className="hover:text-red-500 cursor-pointer duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second col */}
        <div>
          <h3 className="text-sm border-b-2 border-b-white pb-3 tracking-widest">
            ONLINE SERVICES
          </h3>
          {/* online service list */}
          <div className="mt-4">
            <ul>
              {footerList.map((list) => (
                <li className=" my-3">
                  <Link className="hover:underline" to={`${list}c`}>
                    {list}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* third col */}
        <div>
          <h3 className="text-sm border-b-2 border-b-white pb-3 tracking-widest">
            THE UNIVERSITY
          </h3>
          {/* online service list */}
          <div className="mt-4">
            <ul>
              {footerList.map((list) => (
                <li className=" my-3">
                  <Link className="hover:underline" to={`${list}c`}>
                    {list}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* fourth col */}
        <div>
          <h3 className="text-sm border-b-2 border-b-white pb-3 tracking-widest">
            SUPPORT KNUST
          </h3>
          <img src={logo} alt="logo" className="mt-4" />
          <p className="my-4">
            Donate now and be a part of KNUST's next giant leap towards
            providing an ultra modern 2,000 bed capacity Hall of Residence for
            students.
          </p>
          <button className="bg-red-600 w-full rounded py-1 text-lg hover:bg-green-500 duration-300">
            <Link to="/">Make a Donate</Link>
          </button>
        </div>
      </div>
      <p className="text-center text-white mt-12 mb-8">
        © 2023 Kwame Nkrumah University of Science & Technology, Kumasi, Ghana |
        T: +233 5000 99299 | E: uro@knust.edu.gh | Ghana Post GPS Address:
        AK-385-1973
      </p>
    </FooterWrapper>
  );
};

export default Footer;
