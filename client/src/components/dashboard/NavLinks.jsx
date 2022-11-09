import { NavLink } from "react-router-dom";
import { dashboardLinks } from "../../utils/data";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {dashboardLinks.map((link) => {
        const { text, path, id, icon, number } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon" style={{ fontSize: "16px" }}>
              {icon}
            </span>
            {text}
            {number}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
