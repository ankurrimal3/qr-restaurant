import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        {/* <Outlet /> */}
      </div>
    </>
  );
};
export default MainLayout;
