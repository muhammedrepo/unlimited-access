import React from "react";
import { NavLink } from "react-router-dom";
import pageLinks from "../utils/pageLinks";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <>
      {pageLinks.map((pageLink) => {
        const { text, path, id } = pageLink;
        return (
          <li>
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-700 lg:p-0 capitalize active"
                  : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-700 lg:p-0 capitalize"
              }
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
