import { NavDropProps } from "../../types";
import { Link } from "react-router-dom";
import { NavDropWrapper } from "./Navbar.styled";

const NavDrop = ({ img, lists }: NavDropProps) => {
  return (
    <NavDropWrapper>
      <div className="flex gap-x-3 shadow-xl p-4 bg-white rounded-md">
        {/* img */}
        <div className="basis-1/4">
          <img src={img} alt="img" />
          <button className="bg-green-500 rounded-sm text-center w-full text-white mt-3 text-xl py-1 hover:bg-green-400 duration-300">
            <Link to="/">Learn more</Link>
          </button>
        </div>
        {/* list */}
        <div className="basis-3/4">
          <div className="grid grid-cols-3 gap-x-3">
            {lists?.map((list) => (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold">{list.heading}</h2>
                <div className="flex flex-col">
                  {list.list?.map((l, index) => (
                    <Link
                      className="border-b-2 p-1 hover:bg-slate-200 "
                      to={l[index]}
                    >
                      {l}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NavDropWrapper>
  );
};

export default NavDrop;
