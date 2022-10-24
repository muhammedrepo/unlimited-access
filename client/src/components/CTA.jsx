import { BsBoxArrowInRight } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
        <div className="text-white col-span-2">
          <h3 className="text-white">Start Earning Money Today!</h3>
          <span>
            CashZap is absolutely <b>free to join</b> and we offer instant
            cashouts to all our members.
          </span>
        </div>
        <div className="flex gap-6 mt-4 lg:mt-0">
          <Button icon=<FaUserPlus /> url="/register" text="Sign up now" />

          <Button url="/register" icon={<BsBoxArrowInRight />} text="Log In" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
