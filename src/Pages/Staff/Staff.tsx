import { Outlet } from "react-router-dom";
const Staff = () => {
  return (
    <div className="leading-tight text-xl max-w-[90%]">
      <Outlet />
    </div>
  );
};

export default Staff;
