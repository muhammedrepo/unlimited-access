import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo, MenuItems } from "../components";
import { useAppContext } from "../context/appContext";
import { menuItems } from "../utils/data";

const Wrapper = styled.header`
  .active {
    ${tw`text-white rounded bg-green-700 lg:bg-transparent lg:text-gray-700 lg:p-0`}
  }

  .dropdown {
    ${tw`hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow `}
  }
  .show-dropdown {
    visibility: visible;
  }
`;

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper className="">
      <nav className=" bg-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo />
          <div className="flex md:order-2">
            <Link
              to="/register"
              className="text-green-800 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              showSidebar
                ? "block justify-between items-center w-full"
                : "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            }
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              {menuItems.map((menu, index) => {
                return (
                  <>
                    {showSidebar ? (
                      <MenuItems
                        items={menu}
                        key={index}
                        toggleSidebar={toggleSidebar}
                      />
                    ) : (
                      <MenuItems items={menu} key={index} />
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
