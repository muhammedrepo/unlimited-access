import { BsBoxArrowInRight, BsCheckCircle } from "react-icons/bs";
import { FaQuestion, FaUserPlus } from "react-icons/fa";
import Button from "./Button";

const steps = [
  {
    id: 1,
    content: "Get paid for clicks on your referral link.",
  },
  {
    id: 2,
    content: "Get paid for referral sign ups.",
  },
  {
    id: 3,
    content:
      "Get paid to do simple tasks i.e. Play games, test out free apps and more.",
  },
  {
    id: 4,
    content: "Hourly Giveaway and much more!",
  },
  {
    id: 5,
    content: "Get paid for completing daily Quests.",
  },
];

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
        {steps.map((step) => {
          const { id, content } = step;

          return (
            <div key={id}>
              <p className="flex items-center">
                <span className="mr-2 font-bold text-2xl">
                  <BsCheckCircle />
                </span>{" "}
                {content}
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
