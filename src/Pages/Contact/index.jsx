import "./index.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <h1>Contact Page</h1>
      <div className="btn-container">
        <Link to="/about" style={{ textDecoration: "none" }} className="btn">
          About
        </Link>
        <Link style={{ textDecoration: "none" }} to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
};

export default index;
