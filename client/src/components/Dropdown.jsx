import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ submenu, dropdown }) => {
  return (
    <div
      className={`${
        dropdown ? 'block absolute' : 'hidden'
      } z-10 w-full md:w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow-lg`}
    >
      <ul className='py-4 text-sm text-gray-700'>
        {submenu.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.path}
              className='block py-2 px-4 hover:bg-green-500 uppercase font-normal md:font-medium'
            >
              {menu.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
