import styled from "styled-components";
import tw from "twin.macro";
import { useAppContext } from "../../context/appContext";
import { menuItems } from "../../utils/data";
import { Logo, Button } from "../../components";
import MenuItems from "./MenuItems";

const Wrapper = styled.header`
  .active {
    ${tw` text-skin-base rounded bg-skin-button-green lg:bg-transparent lg:text-gray-700 lg:p-0`}
  }
`;

const Navbar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-skin-base px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Logo />
          <div className="flex items-center md:order-2">
            <div className="space-x-2">
              <Button
                url="/register"
                className="bg-skin-button-yellow text-skin-black"
              >
                Log In
              </Button>
              <Button
                url="/register"
                className="bg-skin-button-green text-skin-base"
              >
                Get Started
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-skin-muted rounded-lg lg:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                ? "block w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-skin-base">
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
