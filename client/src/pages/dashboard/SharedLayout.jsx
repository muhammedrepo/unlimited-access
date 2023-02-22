import { Outlet } from 'react-router-dom';

import { BigSidebar, SmallSidebar, Navbar } from '../../components/dashboard';

const SharedLayout = () => {
  return (
    <main className='dashboard grid-cols-1 grid bg-gray-100 '>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />

        <div className='dashboard-page w-11/12 mx-auto py-4 '>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;
