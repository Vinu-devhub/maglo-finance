import Header from "@/components/views/Header";
import Sidebar from "@/components/views/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen flex ">
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
