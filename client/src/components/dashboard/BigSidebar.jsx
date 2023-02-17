import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import { Logo, Button } from '../../components';
import { FaPowerOff, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--color-base);
      min-height: 100vh;
      height: 100%;
      width: 290px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      color: var(--grey-500);
      padding: 0.6rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
    .sidebar-user {
      position: relative;
      border-bottom: 1px solid #e6edef;
      margin-bottom: 20px;
    }
  }
`;

const BigSidebar = () => {
  const { showSidebar, user } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <div
            className='sidebar-user text-center flex flex-col items-center'
            style={{ padding: '14px' }}
          >
            <div className='btn bg-skin-green-dark w-20 h-20 mb-3 rounded-full shadow-lg'>
              <img src='' alt='user' />
              <FaUser />
            </div>

            <Link to='https://cloutzap.com/taskwall'>
              {' '}
              <h6 className='mt-1 f-14 font-semibold'>
                <span className='font-semibold'>{user.email}</span>
              </h6>
            </Link>
            <ul className='mt-2 flex text-xs font-semibold space-x-4 mb-4'>
              <li>
                <span>
                  $<span className=''>2,541</span>
                </span>
                <p>Total Earnings</p>
              </li>
              <li>
                <span>
                  $<span className=''>137</span>
                </span>
                <p>Balance</p>
              </li>
              <li>
                <span>
                  <span className=''>16</span>
                </span>
                <p>Referrals</p>
              </li>
            </ul>
            <Button
              className='bg-skin-green-dark text-skin-base'
              url='/takswall'
            >
              <span className='capitalize text-xs'>
                Download Apps For Money
              </span>
            </Button>
          </div>

          <NavLinks />
          <button
            type='button'
            className='flex items-center gap-x-4 px-10 pt-4 text-sm'
            onClick={() => {}}
          >
            <FaPowerOff />
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
