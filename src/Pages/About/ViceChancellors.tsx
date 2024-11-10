import ProfileCard from "./ProfileCard";
import ProfObiri from "../../assets/Prof Kwasi Obiri-Danso_2.jpg";
const ViceChancellors = () => {
  return (
    <div className="grid grid-cols-3">
      <ProfileCard
        ProfileImg={ProfObiri}
        name="Prof Kwasi Obiri-Danso"
        position="Vice Chancellor"
        period="2016-2020"
      />
      <ProfileCard
        ProfileImg={ProfObiri}
        name="Prof Kwasi Obiri-Danso"
        position="Vice Chancellor"
        period="2016-2020"
      />
      <ProfileCard
        ProfileImg={ProfObiri}
        name="Prof Kwasi Obiri-Danso"
        position="Vice Chancellor"
        period="2016-2020"
      />
    </div>
  );
};

export default ViceChancellors;
