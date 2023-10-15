import "./index.css";
import { Link, Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <h1>HomePage</h1>
      <div className="btn-container">
        <Link to="/contact" style={{ textDecoration: "none" }} className="btn">
          Contact
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about" className="btn">
          About{" "}
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default index;
