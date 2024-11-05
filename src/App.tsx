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

interface Links {
  subHeading?: string;
  content?: string[];
}

function App() {
  const link: Links[] = [
    {
      subHeading: "SCHOOL",
      content: [
        "admission",
        "Sciences",
        "Hospitality",
        "Management",
        "Domestic",
      ],
    },
    {
      subHeading: "DEPARTMENT",
      content: [
        "Engineering",
        "Sciences",
        "Hospitality",
        "Management",
        "Domestic",
      ],
    },

    {
      subHeading: "FACULTY",
      content: [
        "Engineering",
        "Sciences",
        "Hospitality",
        "Management",
        "Domestic",
      ],
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route
        path="/about"
        element={
          <LayoutFurther title="ABOUT" links={link}>
            <About />
          </LayoutFurther>
        }
      />
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
