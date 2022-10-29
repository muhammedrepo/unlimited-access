import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <div className={`${dropdown ? " show-dropdown" : "dropdown"}`}>
      <ul className="py-1 text-sm text-gray-700">
        {submenus.map((submenu, index) => (
          <li key={index}>
            <NavLink
              to={submenu.path}
              className="block py-2 px-4 hover:bg-green-500"
            >
              {submenu.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
