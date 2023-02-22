import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';

const MenuItems = ({ items, toggleSidebar }) => {
  const { submenu, text, path } = items;

  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdown && ref.current?.contains(e.target)) {
        setTimeout(() => {
          setDropdown(false);
        }, 500);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = useCallback(() => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  }, []);

  return (
    <li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {submenu ? (
        <React.Fragment>
          <button
            className='relative flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto capitalize'
            type='button'
            onClick={() => setDropdown((prev) => !prev)}
          >
            {text}
          </button>
          {dropdown && <Dropdown submenu={submenu} />}
        </React.Fragment>
      ) : (
        <NavLink
          to={path}
          onClick={toggleSidebar}
          className={({ isActive }) =>
            isActive
              ? 'block py-9 pr-4 pl-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 capitalize'
              : 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-700 lg:p-0 capitalize'
          }
        >
          {text}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItems;
