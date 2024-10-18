import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/LayoutRoute/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
