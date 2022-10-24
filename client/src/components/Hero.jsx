import { Button } from "../components";
import { FaMoneyBillWave, FaRegSmile } from "react-icons/fa";
import ReactTextRotator from "react-text-rotator";

const contentA = [
  {
    text: "$500",
    className: "classA",
    animation: "fade",
  },
  {
    text: "$1000",
    className: "classB",
    animation: "zoom",
  },
];

const contentB = [
  {
    text: "Daily!",
    className: "classA",
    animation: "squeeze",
  },
  {
    text: "Today!",
    className: "classB",
    animation: "squeeze",
  },
];

const contentC = [
  {
    text: "INFLUENCER",
    className: "classA",
    animation: "fade",
  },
  {
    text: "CLOUT",
    className: "classB",
    animation: "zoom",
  },
];

const contentD = [
  {
    text: "Home!",
    className: "classA",
    animation: "squeeze",
  },
  {
    text: "School!",
    className: "classB",
    animation: "squeeze",
  },
];

const Hero = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8 items-center">
        <div className="flex flex-col items-center">
          <h1 className="flex space-x-2 tracking-wide">
            Make
            <ReactTextRotator
              content={contentA}
              time={5000}
              startDelay={2000}
            />
            <ReactTextRotator
              content={contentB}
              time={5000}
              startDelay={2500}
            />
          </h1>
          <h3 className="flex space-x-2 tracking-wide">
            Welcome To The #1
            <ReactTextRotator
              content={contentC}
              time={5000}
              startDelay={3000}
            />{" "}
            Network
          </h3>
          <h2 className="flex space-x-2 tracking-wide">
            Earn Money At
            <ReactTextRotator
              content={contentD}
              time={5000}
              startDelay={3500}
            />
          </h2>
        </div>
        <div className="text-center">
          <p className="mb-8 px-16">
            Earn money for clicks on your referral link, referral sign ups and
            completing simple tasks. Use the power of your social media to make
            money online. Enjoy daily paychecks from the comfort of your home.
          </p>
          <Button
            text="sign up now for $35 Bonus!"
            bgColor="green"
            url="/register"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          icon={<FaRegSmile />}
          text="reviews"
          bgColor="yellow"
          url="/reviews"
        />
        <Button
          icon={<FaMoneyBillWave />}
          text="payment proofs"
          bgColor="yellow"
          url="/proofs"
        />
      </div>
    </div>
  );
};

export default Hero;
