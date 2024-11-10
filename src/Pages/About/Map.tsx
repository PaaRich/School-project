import KNUSTmap from "../../assets/KNUST-Map_0.jpg";
import { Link } from "react-router-dom";

const Map = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold text-slate-500 mb-2">
          We are located in Kumasi Ashanti Region of Ghana
        </h3>
        <iframe
          src="https://shorturl.at/w52io"
          width="800"
          height="600"
          //style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link
          className="text-lg hover:underline duration-200 my-4 rounded bg-green-600 text-red-600 outline-0 p-2 inline-block"
          to="https://shorturl.at/2Lpuw"
          //to="https://www.google.com.gh/maps/place/Kwame+Nkrumah+University+of+Science+and+Technology/@6.6745035,-1.5741863,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0xfdb9461ea6fb9af:0xb0da4f6d9c4b361f!2sKwame+Nkrumah+University+of+Science+and+Technology+(KNUST),+Accra+Road,+Kumasi!2m2!1d-1.5716114!2d6.6745035!3m5!1s0xfdb9461ea6fb9af:0xb0da4f6d9c4b361f!8m2!3d6.6745035!4d-1.5716114!16zL20vMDd4bHpf?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
        >
          Get Directions
        </Link>
      </div>
      <div>
        <h3 className="font-bold text-slate-500 text-2xl">KNUST MAP</h3>
        <img className="w-[90%]" src={KNUSTmap} alt="knustMap" />
      </div>
    </div>
  );
};

export default Map;
