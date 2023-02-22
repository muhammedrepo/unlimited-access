import { useState } from 'react';
import {
  FaAlignLeft,
  FaCaretDown,
  FaFileInvoiceDollar,
  FaUserCircle,
} from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../../context/appContext';
import Button from '../Button';

const Wrapper = styled.nav`
  z-index: 40;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--color-green-dark);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--color-base);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }

  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { toggleSidebar, logoutUser, user } = useAppContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div className='p-0'>
          <ul className='flex space-x-4'>
            <li>
              <Link to='withdraw'>
                <Button className='bg-skin-green-light text-skin-dark-green'>
                  <FaFileInvoiceDollar className='mr-2' />
                  <span className='capitalize font-semibold text-xs'>
                    Payments
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to='settings'>
                <Button className='bg-skin-green-light text-skin-dark-green'>
                  <FiSettings className='mr-2' />
                  <span className='capitalize font-semibold text-xs'>
                    Edit Account
                  </span>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className='btn-container'>
          <Button btnDark onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle className='mr-2' />
            {user?.name}
            <FaCaretDown className='ml-1' />
          </Button>

          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <Button danger onClick={logoutUser}>
              logout
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
