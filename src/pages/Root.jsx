import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
