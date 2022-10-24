import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "./Button";
import Counter from "./Counter";
import Logo from "./Logo";

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
                  <div className="flex text-white font-bold text-2xl">
                    <Counter end={560574} />+
                  </div>
                  <div className="border border-gray-700 my-2"></div>
                  <h5 className="capitalize text-gray-500 mt-0">
                    Registered Users
                  </h5>
                </div>
                <div className="center">
                  <div className="flex text-white font-bold text-2xl">
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
                <div className="lg:mt-0 ">
                  <Button url="/register" text="Sign up now" bgColor="green" />
                </div>
                <div className=" mt-lg-0">
                  <Button
                    url="/register"
                    icon={<BsBoxArrowInRight />}
                    text="Log In"
                    bgColor="yellow"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center text-center m-0 w-full ">
                <p className="mb-2 mt-4 text-white">
                  Copyrights © 2022.
                  <br /> All Rights Reserved by CLoutZap Inc.
                </p>

                <div className="copyright-links">
                  <Link to="/reviews" className="text-gray-500">
                    Review
                  </Link>{" "}
                  /
                  <Link to="/about" className="text-gray-500">
                    About Us
                  </Link>{" "}
                  /{" "}
                  <Link to="/faq" className="text-gray-500">
                    FAQ
                  </Link>{" "}
                  /{" "}
                  <Link to="/proofs" className="text-gray-500">
                    Proof Wall
                  </Link>
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
