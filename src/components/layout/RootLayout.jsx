import SideBar from "../general/SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 md:mx-5  py-4 ">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
