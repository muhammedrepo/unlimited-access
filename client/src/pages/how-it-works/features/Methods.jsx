import { FiArrowRight } from "react-icons/fi";
import { Button } from "../../../components";
import { methodsInfo } from "../../../utils/data";

const Methods = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl py-14">
      <div className="flex flex-col items-center max-w-3xl mx-auto g-0">
        {methodsInfo.map((method) => {
          const { id, image, title, content } = method;

          return (
            <>
              <div key={id} className="flex">
                <div className="w-40 h-32 px-3 mr-4">
                  <img
                    src={image}
                    alt="Feature Icon"
                    className="bg-transparent rounded-0"
                  />
                </div>
                <div className="px-3 flex flex-col items-start gap-y-3">
                  <h3 className="m-0 text-lg">{title}</h3>
                  <p className="text-sm">{content}</p>
                  <Button
                    url="/register"
                    className="bg-skin-fill text-skin-base"
                  >
                    <FiArrowRight className="mr-2" />
                    Start Earning Now
                  </Button>
                </div>
              </div>
              <div className="line relative w-full my-16 mx-0 border-t border-gray-300" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Methods;
