import "./index.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <h1>AboutPage</h1>
      <div className="btn-container">
        <Link to="/" style={{ textDecoration: "none" }} className="btn">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact" className="btn">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default index;
