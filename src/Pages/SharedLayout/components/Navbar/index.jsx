import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div>
      <NavLink to="" style={{ marginRight: "10px" }}>
        Home
      </NavLink>
      <NavLink to="contact" style={{ marginRight: "10px" }}>
        Contact
      </NavLink>
      <NavLink to="about" style={{ marginRight: "10px" }}>
        About
      </NavLink>
    </div>
  );
};

export default index;
