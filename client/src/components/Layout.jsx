import { Outlet } from 'react-router-dom';
import { Footer } from '.';
import Navbar from '../parts/Header/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
