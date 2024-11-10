import { ProfileImgProps } from "../../types";
const ProfileCard = ({
  ProfileImg,
  name,
  position,
  period,
}: ProfileImgProps) => {
  return (
    <div
      className="bg-slate-300 shadow-xl flex flex-col w-fit"
      data-aos="fade-right"
    >
      <div className="basis-2/3">
        <img className="object-contain" src={ProfileImg} alt="Profile img" />
      </div>

      <div className=" bg-transparent text-red-800 basis-1/3 text-center">
        <div className="border-white border-2 mx-4 mb-4 border-t-0">
          <p className="text-xl">{name}</p>
          <p>
            <span>{position}</span>
            <span>{period}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
