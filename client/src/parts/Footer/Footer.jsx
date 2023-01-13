import { BsBoxArrowInRight } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Counter, Logo } from "../../components";
import { footerLinks } from "../../utils/data";

const Footer = () => {
  return (
    <footer className="border-0" style={{ backgroundColor: "#212529" }}>
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="footer-widgets-wrap dark pb-5 pt-3 pt-lg-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col text-center items-center">
              <Logo footer />
              <div className="grid grid-cols-2 gap-4 ">
                <div className="text-center">
                  <div className="flex text-skin-base font-bold text-2xl">
                    <Counter end={560574} />+
                  </div>
                  <div className="border border-gray-700 my-2"></div>
                  <h5 className="capitalize text-gray-500 mt-0">
                    Registered Users
                  </h5>
                </div>
                <div className="center">
                  <div className="flex text-skin-base font-bold text-2xl">
                    $<Counter end={22} />
                    M+
                  </div>
                  <div className="border border-gray-700 my-2"></div>
                  <h5 className="text-capitalize text-gray-500 mt-0">
                    Paid Out To Users
                  </h5>
                </div>
              </div>
              <p className="text-gray-300">Sign up and receive $35 free!</p>
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="flex justify-around">
                <Link to="/register" className="lg:mt-0">
                  <Button secondary>
                    <FaUserPlus className="mr-2" />
                    Sign Up
                  </Button>
                </Link>

                <Link to="/register" className="lg:mt-0">
                  <Button primary>
                    <BsBoxArrowInRight className="mr-2" />
                    Log In
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col items-center text-center m-0 w-full ">
                <p className="mb-2 mt-4 text-skin-base">
                  Copyrights © 2022.
                  <br /> All Rights Reserved by CLoutZap Inc.
                </p>

                <div className="copyright-links space-x-2 capitalize">
                  {footerLinks.map((link) => (
                    <>
                      <Link
                        key={link.id}
                        to={link.path}
                        className="text-skin-muted font-medium"
                      >
                        {link.text}
                      </Link>{" "}
                      /
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
