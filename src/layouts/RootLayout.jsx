import { Outlet } from "react-router";
import NavBar from "../pages/Home/Shared/NavBar";
import Footer from "../pages/Home/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="bg-[#00bf8312] sm:pt-16 pt-9">
      <div className=" sm:w-11/12 mx-auto w-full">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
