import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const index = () => {
  return (
    <div className="container">
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default index;
