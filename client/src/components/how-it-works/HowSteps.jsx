import { howItWorks } from "../../utils/data";
import Button from "../Button";

const HowSteps = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
      <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          How it Works
        </h2>
        <p className="text-gray-500 sm:text-xl ">
          Easiest #1 Influencer Network in the world. Easy as 1,2,3 all you have
          to do is Join, Share, and Earn.
        </p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {howItWorks.map((step) => {
          const { id, icon, title, content } = step;

          return (
            <div key={id} className="text-center flex flex-col items-center">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 ">
                <span className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 text-5xl font-bold">
                  {icon}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-gray-500 ">{content}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <Button
          text="Sign up now for $35 bonus!"
          bgColor="green"
          url="/register"
        />
      </div>
    </div>
  );
};

export default HowSteps;
