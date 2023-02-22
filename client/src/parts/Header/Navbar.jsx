import { useAppContext } from '../../context/appContext';
import { menuItems } from '../../utils/data';
import { Logo, Button } from '../../components';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const { showSidebar, toggleSidebar, user } = useAppContext();

  return (
    <nav className='fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-skin-base px-4 lg:px-6 py-4'>
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
        <Logo />
        <div className='flex items-center md:order-2'>
          {user ? (
            <Link to='/'>
              <Button btnDark>Back to my dashboard</Button>
            </Link>
          ) : (
            <div className='space-x-2 hidden lg:block'>
              {showSidebar ? null : (
                <React.Fragment>
                  <Link to='/register'>
                    <Button secondary className='text-skin-black'>
                      Log In
                    </Button>
                  </Link>
                  <Link to='/register'>
                    <Button primary>Get Started</Button>
                  </Link>
                </React.Fragment>
              )}
            </div>
          )}

          <button
            type='button'
            className='inline-flex items-center p-2 ml-1 text-sm text-skin-muted rounded-lg lg:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
            onClick={toggleSidebar}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div
          className={
            showSidebar
              ? 'block w-full md:block md:w-auto'
              : 'hidden w-full md:block md:w-auto'
          }
        >
          <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-skin-base'>
            {menuItems.map((menu) => {
              return <MenuItems items={menu} key={menu.id} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
