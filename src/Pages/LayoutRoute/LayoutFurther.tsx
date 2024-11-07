import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/Navbar/SideBar";
import Header from "../../Components/Reusable/Header";
//import { Outlet } from "react-router-dom";
import { ReactElement } from "react";
interface Props {
  title: string;
  links: [
    {
      subHeading: string;
      content: string[];
    }
  ];
  children: ReactElement;
}
const LayoutFurther = ({ title, links, children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[90%] mx-auto py-12">
        <Header title={title} />
        <div className="flex gap-x-8 mt-8">
          <div className="basis-1/4">
            <SideBar title={title} links={links} />
          </div>

          <div className="basis-3/4">{children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LayoutFurther;
