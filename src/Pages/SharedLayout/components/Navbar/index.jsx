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
      <NavLink to="store" style={{ marginRight: "10px" }}>
        Store
      </NavLink>

    </div>
  );
};

export default index;
