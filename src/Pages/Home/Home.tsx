import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Reusable/Header";
import Announcement from "../MediaPress/Announcement";
import Slider from "react-slick";
import img from "../../../public/engineering_student.jpg";
import { HomeWrapper } from "./Home.styled";
import { FaGlobe, FaRegNewspaper, FaTwitter } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";

const Home = () => {
  const carouselOption = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    //autoplaySpeed: 3000,
  };

  const [showYes, setShowYes] = useState(true);
  return (
    <HomeWrapper>
      {/* HeroHeader */}
      <Slider {...carouselOption}>
        <div className="c-first h-[80dvh]">
          <div className="max-w-[90%] mx-auto h-full pt-12 font-roboto">
            {/* card */}
            <div className="bg-white rounded-lg w-[30rem] p-4 relative">
              <h1 className="text-red-800 text-3xl">2024/2025 Admissions</h1>
              <p data-aos="fade-right" className="text-2xl my-4">
                It is announced for the information of prospective applicants
                and the general public that application e-vouchers to
                Postgraduate/Undergraduate/Top-Up programmes of study at the
                University for the 2024/2025 Academic Year are now on sale.
              </p>
              <button
                data-aos="fade-left"
                className="absolute -bottom-4 bg-red-800 text-white p-2 tracking-wider"
              >
                APPLY NOW!
              </button>
            </div>
          </div>
        </div>
        <div className="c-second h-[80dvh]">
          <div className="max-w-[90%] mx-auto h-full pt-12">
            {/* card */}
            <div className="bg-white rounded-lg w-[30rem] p-4 relative">
              <h1 className="text-red-800 text-3xl">
                College of Health Sciences Endowment Fund
              </h1>
              <p className="text-2xl my-4">
                The Endowment Fund of the the College will focus on creating
                opportunities to retain Health Sciences graduates in Ghana in
                order to ameliorate some of the developmental challenges
                confronting the health sector of Ghana
              </p>
              <button className="absolute -bottom-4 bg-red-800 text-white p-2 tracking-wider">
                APPLY NOW!
              </button>
            </div>
          </div>
        </div>
      </Slider>
      <div>
        <div className="max-w-[90%] mx-auto my-12">
          <Header title="NEWS & EVENTS" />
          <div className="flex gap-x-4 mt-12 h-[20rem]">
            <div data-aos="fade-right" className="basis-1/4 h-full">
              <div className="text-red-700 flex items-center gap-x-1">
                <FaRegNewspaper size={24} />
                <h1>TOP STORY</h1>
              </div>
              <div className="c-news-bgImg cursor-pointer relative h-full">
                <p className="bg-[rgb(0,0,0,0.8)]  text-white absolute bottom-0 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error commodi fuga ducimus repellendus praesentium, vero autem
                  dolorum illum, at itaque reiciendis saepe omnis. Quas aliquid
                  tenetur natus. Culpa, autem similique?
                </p>
              </div>
            </div>
            {/* NEWs */}
            <div data-aos="fade-up" className="basis-2/4">
              {/* header */}
              <div className="border-b-2 border-b-red-700 flex items-center justify-between">
                <div className="flex items-center cursor-pointer relative c-newsHeader w-fit py-2">
                  <span
                    className=" text-red-700 px-4"
                    onClick={() => setShowYes(true)}
                  >
                    NEWS
                  </span>
                  <span
                    className=" text-red-700 px-4"
                    onClick={() => setShowYes(false)}
                  >
                    ALL EVENTS
                  </span>
                  <span
                    className={`absolute w-[45%] h-[2px] bottom-0 bg-red-700 ${
                      showYes ? "left-0" : "left-[45%]"
                    } duration-300`}
                  ></span>
                </div>
                <button className="bg-red-700 text-white rounded-lg hover:bg-red-600 border-0 py-1 px-2">
                  More news
                </button>
              </div>

              <div>
                {showYes ? (
                  <div className="overflow-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit delectus quasi consectetur molestias ipsum, dolores eos
                    sed non voluptatibus modi hic repellendus voluptatum eum
                    nulla sint velit dolorem. Voluptate necessitatibus ratione
                    atque, quo, quidem blanditiis dignissimos reiciendis tempora
                    soluta excepturi asperiores beatae laborum minus. Excepturi
                    mollitia assumenda omnis reprehenderit unde?
                  </div>
                ) : (
                  <div className="overflow-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem cum dicta reprehenderit quasi, amet autem, aliquam
                    non soluta possimus vel quidem labore quae deleniti eius!
                    Sit iste deserunt suscipit voluptates.
                  </div>
                )}
              </div>
            </div>
            {/* ANNOUCEMENT */}
            <div data-aos="fade-left" className="basis-1/4">
              {/* header */}
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center">
                  <TbSpeakerphone className="text-red-800 me-2" size={24} />
                  <Link
                    className="text-red-800 hover:text-red-600 duration-200"
                    to="annoucements"
                  >
                    ANNOUCEMENTS
                  </Link>
                </span>
                <span className="flex items-center">
                  <FaCircleArrowRight />
                  <p className="ml-2 text-red-800 hover:text-red-700 cursor-pointer">
                    view all
                  </p>
                </span>
              </div>
              {/* body */}
              <div className="overflow-y-scroll h-[90%]">
                <Announcement message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, blanditiis fugiat. Enim, deserunt. Eos, inventore repellat. Unde amet neque aspernatur." />
                <Announcement message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, blanditiis fugiat. Enim, deserunt. Eos, inventore repellat. Unde amet neque aspernatur." />
                <Announcement message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, blanditiis fugiat. Enim, deserunt. Eos, inventore repellat. Unde amet neque aspernatur." />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* media */}
      <div>
        <div className="max-w-[90%] mx-auto my-12">
          <Header title="MEDIA" />
          {/* body */}
          <div className="flex gap-x-4 py-8">
            {/* YOUTUBE */}
            <div className="basis-2/4">
              {/* header */}
              <div className="flex items-center gap-x-2 text-red-800 py-2">
                <TfiYoutube />
                <span>KNUST ON YOUTUBE</span>
              </div>
              {/* youtube-body */}
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* TWITTER */}
            <div className="basis-1/4">
              {/* header */}
              <div className="flex items-center gap-x-2 text-red-800 py-2">
                <FaTwitter />
                <span>KNUST ON TWITTER</span>
              </div>
              {/* twitter-body */}
              <div className="border-2 rounded-lg max-h-[315px]">
                <div className="border-b-2 hover:bg-gray-200 duration-150 p-2">
                  <Link
                    className="font-semibold text-xl hover:underline"
                    to="#"
                  >
                    Post from @KNUSTGH
                  </Link>
                </div>
                <p className="overflow-y-scroll hover:bg-gray-100 p-2 max-h-[250px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident hic beatae dolores dicta repellat illo repellendus,
                  eius illum incidunt animi quidem error ad perspiciatis.
                  Temporibus nihil saepe, expedita omnis corrupti eum nostrum
                  suscipit, vitae quasi qui dolorum quis doloribus architecto
                  quam Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nemo, impedit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum pariatur esse obcaecati sunt deserunt
                  natus sint, totam eaque illum accusamus?
                </p>
              </div>
            </div>
            <div className="basis-1/4">
              {/* header */}
              <div className="flex items-center gap-x-2 text-red-800 py-2">
                <FaGlobe />
                <span>AROUND THE WORLD</span>
              </div>
              {/* body */}
              <div className="max-h-[315px]">
                <img className="h-1/2" src={img} alt="img" />
                <div className="h-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt quos porro, aliquam illum reiciendis sed nostrum
                    dignissimos optio molestias voluptas rerum excepturi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
