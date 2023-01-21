import { FaCaretRight, FaCheckCircle, FaCheckSquare } from "react-icons/fa";
import { Badge } from "../../components";
import { Card, CardHeader } from "../../components/UI";

const OverallProgress = () => {
  return (
    <section className="pt-14">
      <Card>
        <div className="flex items-center justify-between">
          <CardHeader
            icon=<FaCheckCircle className=" text-skin-green-dark" />
            title="Cash Out"
          />

          <div className="pr-7">
            <Badge color="bg-skin-green-dark text-skin-base">
              Overall Progress
            </Badge>
          </div>
        </div>
        <div className="py-4 px-5">
          <hr />
        </div>
        <p className="inline-flex items-center gap-x-2 px-7">
          <FaCheckSquare className="text-skin-green-dark" /> Track how close you
          are to reaching the requirements for your first cash out!
        </p>
        <div className="grid grid-cols-2 p-7">
          <div>
            <span className="text-gray-500 flex items-center">
              Clicks <FaCaretRight />
            </span>
          </div>
          <div className="col-6 text-skin-green-dark font-bold">100%</div>
          <div>
            <span className="text-gray-500 flex items-center">
              Referrals <FaCaretRight />
            </span>
          </div>
          <div className="col-6 text-skin-green-dark font-bold">100%</div>
          <div>
            <span className="text-gray-500 flex items-center">
              Tasks <FaCaretRight />
            </span>
          </div>
          <div className="col-6 text-skin-green-dark font-bold">100%</div>
          <div>
            <span className="text-gray-500 flex items-center">
              Social Post <FaCaretRight />
            </span>
          </div>
          <div className="col-6 text-skin-green-dark font-bold">80%</div>
        </div>
        <div className="project-status mt-1 mb-2 text-center p-7">
          <p className="text-gray-500">Total : 96%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-skin-green-dark h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default OverallProgress;
