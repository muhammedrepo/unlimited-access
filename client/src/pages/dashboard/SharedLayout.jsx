import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { BigSidebar, SmallSidebar, Navbar } from "../../components/dashboard";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard bg-gray-100">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />

          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
