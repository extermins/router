import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        홈
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        프로젝트
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        연락처
      </NavLink>
    </nav>
  );
}

export default Navbar;
