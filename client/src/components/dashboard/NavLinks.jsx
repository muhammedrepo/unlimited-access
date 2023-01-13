import { NavLink } from "react-router-dom";
import { dashboardLinks } from "../../utils/data";
import BigSidebarDropdown from "./BigSidebarDropdown";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {dashboardLinks.map((link) => {
        const { text, path, id, icon, number, submenus } = link;

        return (
          <div key={id}>
            {submenus ? (
              <BigSidebarDropdown link={link} />
            ) : (
              <NavLink
                to={path}
                key={id}
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
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
