import { BsBoxArrowInRight, BsCheckCircle } from "react-icons/bs";
import { FaQuestion, FaUserPlus } from "react-icons/fa";
import { earnMore } from "../utils/data";
import Button from "./Button";

const HowCanYouEarn = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <div>
        <h3 className="flex items-center text-white">
          <span className="mr-2">
            <FaQuestion />
          </span>{" "}
          How can you earn more $$$ with cloutzap?
        </h3>
      </div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-3 gap-4">
        {earnMore.map((item) => {
          const { id, subtitle } = item;

          return (
            <div key={id}>
              <p className="flex items-center">
                <span className="mr-2 font-bold text-2xl">
                  <BsCheckCircle />
                </span>{" "}
                {subtitle}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <Button
          icon={<FaUserPlus />}
          text="sign up"
          bgColor="green"
          url="/register"
        />
        <Button
          icon={<BsBoxArrowInRight />}
          text="log in"
          bgColor="yellow"
          url="/register"
        />
      </div>
    </div>
  );
};

export default HowCanYouEarn;
