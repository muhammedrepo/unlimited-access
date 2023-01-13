import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../../components/Dropdown";

const MenuItems = ({ items, toggleSidebar }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdown && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      //Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  return (
    <li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <button
            className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto capitalize"
            type="button"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.text}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink
          to={items.path}
          onClick={toggleSidebar}
          className={({ isActive }) =>
            isActive
              ? "block py-9 pr-4 pl-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 capitalize"
              : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-700 lg:p-0 capitalize"
          }
        >
          {items.text}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItems;
