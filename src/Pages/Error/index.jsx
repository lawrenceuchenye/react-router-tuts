import "./index.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <h1>404 Error Page</h1>
      <div className="btn-container">
        <Link to="/" style={{ textDecoration: "none" }} className="btn">
          Go home
        </Link>
        </div>
    </div>
  );
};

export default index;
