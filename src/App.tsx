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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route
        path="/about"
        element={
          <LayoutFurther title="ABOUT">
            <About />
          </LayoutFurther>
        }
      />
      <Route
        path="/academics"
        element={
          <LayoutFurther title="ACADEMICS">
            <Academics />
          </LayoutFurther>
        }
      />
      <Route
        path="/admission"
        element={
          <LayoutFurther title="ADMISSION">
            <Admission />
          </LayoutFurther>
        }
      />
      <Route
        path="/research"
        element={
          <LayoutFurther title="RESEARCH">
            <Research />
          </LayoutFurther>
        }
      />
      <Route
        path="/media"
        element={
          <LayoutFurther title="MEDIA">
            <Media />
          </LayoutFurther>
        }
      />
      <Route
        path="/staff"
        element={
          <LayoutFurther title="STAFF">
            <Staff />
          </LayoutFurther>
        }
      />
      <Route
        path="/students"
        element={
          <LayoutFurther title="STUDENT">
            <Student />
          </LayoutFurther>
        }
      />
      <Route
        path="/alumini"
        element={
          <LayoutFurther title="ALUMINI">
            <Alumini />
          </LayoutFurther>
        }
      />
    </Routes>
  );
}

export default App;
