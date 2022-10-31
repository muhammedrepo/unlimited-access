import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import { Logo, Button } from "../../components";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
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
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
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
      padding: 30px;
      position: relative;
      border-bottom: 1px solid #e6edef;
      margin-bottom: 20px;
    }
  }
`;

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div
            className="sidebar-user text-center flex flex-col items-center"
            style={{ padding: "15px" }}
          >
            <div
              className="btn bg-green-800 quick-social icon-back mr-2 flex items-center justify-center text-white"
              style={{
                borderRadius: "100%",
                padding: "10px 0",
                width: "50px",
                height: "50px",
                fontSize: "18px",
              }}
            >
              <FaUser />
            </div>

            <Link to="https://cloutzap.com/taskwall">
              {" "}
              <h6 className="mt-1 f-14 font-semibold">
                @<span className="font-semibold">coolzyte</span>
              </h6>
            </Link>
            <ul className="mt-2 flex text-xs space-x-4">
              <li>
                <span>
                  $<span className="">2,541</span>
                </span>
                <p>Total Earnings</p>
              </li>
              <li>
                <span>
                  $<span className="">137</span>
                </span>
                <p>Balance</p>
              </li>
              <li>
                <span>
                  <span className="">16</span>
                </span>
                <p>Referrals</p>
              </li>
            </ul>
            <Button
              text="Download Apps For Money"
              bgColor="green"
              url="https://cloutzap.com/taskwall"
            />
          </div>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
