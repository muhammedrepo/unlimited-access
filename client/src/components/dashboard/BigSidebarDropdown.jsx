import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BigSidebarDropdown = ({ link }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <React.Fragment>
      <button
        className='nav-link'
        type='button'
        aria-expanded={dropdown ? 'true' : 'false'}
        onClick={() => setDropdown((prev) => !prev)}
      >
        <span className='icon' style={{ fontSize: '16px' }}>
          {link.icon}
        </span>
        {link.text}
      </button>
      <div
        className={`${
          dropdown ? 'block absolute' : 'hidden'
        } z-10 w-full font-normal bg-white rounded divide-y divide-gray-100 shadow-lg py-2 space-y-2`}
      >
        {link.submenus?.map((item) => (
          <NavLink
            to={item.path}
            className='nav-link '
            key={item.id}
            onClick={() => setDropdown(!dropdown)}
          >
            <span className='icon' style={{ fontSize: '16px' }}>
              {item.icon}
            </span>
            {item.text}
            {item.number}
          </NavLink>
        ))}
      </div>
    </React.Fragment>
  );
};

export default BigSidebarDropdown;
