import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/LayoutRoute/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import LayoutFurther from "./Pages/LayoutRoute/LayoutFurther";
import Academics from "./Pages/Academics/Academics";
import Research from "./Pages/Research/Research";
import Media from "./Pages/MediaPress/Media";
import Staff from "./Pages/Staff/Staff";
import Student from "./Pages/Students/Student";
import Alumini from "./Pages/Alumini/Alumini";
import Admission from "./Pages/Admission/Admission";
import Mission from "./Pages/About/Mission";
import AboutLandingPage from "./Pages/About/AboutLandingPage";
import History from "./Pages/About/History";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Campus from "./Pages/About/Campus";
import Policy from "./Pages/About/Policy";

// ..
AOS.init();
interface Links {
  subHeading?: string;
  content?: string[];
}

// Virtual Tour

// The Chancellor
// Vice-Chancellor's Office
// Welcome Message from VC
// The Vice-Chancellor
// The Pro Vice-Chancellor
// Related Offices
// Contact Information
// Past Vice-Chancellors
// Past Pro Vice-Chancellors

// Registrar's Office

// Finance Office
// Related Offices
// Financial Statements
// Accounting Policies and
function App() {
  const link: Links[] = [
    {
      subHeading: "The Knust",
      content: [
        " Strategic Mandate, Vision, Mission & Core Values",
        "The Emblem",
        "University History",
        "University Policies",
        "The Campus",
        "Maps & Directions",
        "Past Vice-Chancellors",
        "Past Pro Vice-Chancellors",
        "Past Registrars",
        "Council Charter",
      ],
    },
    {
      subHeading: "Administration of the University",
      content: [
        "The University Council",
        "The Principal Officers",
        "Professional Officers",
      ],
    },

    {
      subHeading: "Registrar's Offices",
      content: [
        "The Registrar",
        "Divisions",
        "Registrar's Contact",
        "Past Registrars",
      ],
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      {/* ABOUT ROUTING */}
      <Route
        path="/about"
        element={
          <LayoutFurther title="ABOUT" links={link}>
            <About />
          </LayoutFurther>
        }
      >
        <Route index element={<AboutLandingPage />} />
        <Route
          path="strategicmandatevisionmissioncorevalues"
          element={<Mission />}
        />
        <Route path="theemblem" element="THE EMBLEM PAGE" />
        <Route path="universityhistory" element={<History />} />
        <Route path="thecampus" element={<Campus />} />
        <Route path="universitypolicies" element={<Policy />} />
      </Route>

      {/* ACADEMICS ROUTING */}
      <Route
        path="/academics"
        element={
          <LayoutFurther title="ACADEMICS" links={link}>
            <Academics />
          </LayoutFurther>
        }
      />
      <Route
        path="/admission"
        element={
          <LayoutFurther title="ADMISSION" links={link}>
            <Admission />
          </LayoutFurther>
        }
      />
      <Route
        path="/research"
        element={
          <LayoutFurther title="RESEARCH" links={link}>
            <Research />
          </LayoutFurther>
        }
      />
      <Route
        path="/media"
        element={
          <LayoutFurther title="MEDIA" links={link}>
            <Media />
          </LayoutFurther>
        }
      />
      <Route
        path="/staff"
        element={
          <LayoutFurther title="STAFF" links={link}>
            <Staff />
          </LayoutFurther>
        }
      />
      <Route
        path="/students"
        element={
          <LayoutFurther title="STUDENT" links={link}>
            <Student />
          </LayoutFurther>
        }
      />
      <Route
        path="/alumini"
        element={
          <LayoutFurther title="ALUMINI" links={link}>
            <Alumini />
          </LayoutFurther>
        }
      />
    </Routes>
  );
}

export default App;
