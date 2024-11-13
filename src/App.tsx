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
import Map from "./Pages/About/Map";
import ViceChancellors from "./Pages/About/ViceChancellors";
import LandingPage from "./Pages/Academics/LandingPage";
import Colleges from "./Pages/Academics/Colleges";
import Department from "./Pages/Academics/Department";
import Calender from "./Pages/Academics/Calender";
import AcademicServices from "./Pages/Academics/AcademicServices";
import {
  link,
  academicsLinks,
  admissionLinks,
  researchLinks,
  studentsLinks,
  staffLinks,
} from "./LinksObj";
import AdLandingPage from "./Pages/Admission/AdLandingPage";
import ResearchLanding from "./Pages/Research/ResearchLanding";
import LandingPageStu from "./Pages/Students/LandingPageStu";
import LandingPageStaff from "./Pages/Staff/LandingPageStaff";

// ..
AOS.init();

function App() {
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
        <Route path="mapsdirections" element={<Map />} />
        <Route path="pastvicechancellors" element={<ViceChancellors />} />
      </Route>

      {/* ACADEMICS ROUTING */}
      <Route
        path="/academics"
        element={
          <LayoutFurther title="ACADEMICS" links={academicsLinks}>
            <Academics />
          </LayoutFurther>
        }
      >
        <Route index element={<LandingPage />} />
        <Route path="colleges" element={<Colleges />} />
        <Route path="departmentandprogrammes" element={<Department />} />
        <Route path="academicscalender" element={<Calender />} />
        <Route path="academicservices" element={<AcademicServices />} />
      </Route>

      {/* ADMISSION */}
      <Route
        path="/admission"
        element={
          <LayoutFurther title="ADMISSION" links={admissionLinks}>
            <Admission />
          </LayoutFurther>
        }
      >
        <Route index element={<AdLandingPage />} />
        <Route path="howtoapply" element={<p>HOW TO APPLY</p>} />
        <Route path="cutoffpoints" element={<p>CUT-OFF POINTS</p>} />
        <Route
          path="undergraduateadmissions"
          element={<p>UNDERGRADUATE ADMISSION</p>}
        />
      </Route>

      {/* RESEARCH */}
      <Route
        path="/research"
        element={
          <LayoutFurther title="RESEARCH" links={researchLinks}>
            <Research />
          </LayoutFurther>
        }
      >
        <Route index element={<ResearchLanding />} />
        <Route path="research" element={<p>RESEARCH</p>} />
      </Route>

      {/* MEDIA */}
      <Route
        path="/"
        element={
          <LayoutFurther title="MEDIA" links={link}>
            <Media />
          </LayoutFurther>
        }
      />

      <Route
        path="/staff"
        element={
          <LayoutFurther title="STAFF" links={staffLinks}>
            <Staff />
          </LayoutFurther>
        }
      >
        <Route index element={<LandingPageStaff />} />
        <Route path="staff" element={<p>STAFF</p>} />
        <Route path="staffdirectory" element={<p>STAFF DIRECTORY</p>} />
      </Route>

      {/* STUDENTS */}
      <Route
        path="/students"
        element={
          <LayoutFurther title="STUDENT" links={studentsLinks}>
            <Student />
          </LayoutFurther>
        }
      >
        <Route index element={<LandingPageStu />} />
        <Route path="campuslife" element={<p>CAMPUS LIFE</p>} />
        <Route path="campusfacilities" element={<p>CAMPUS FACILITIES</p>} />
      </Route>
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
