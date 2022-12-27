import { FaTrophy } from "react-icons/fa";
import Button from "../../components/Button";
import Card from "../../components/UI/Card";

const Quest = ({ id, title, sub, progress, claim, goal }) => {
  return (
    <Card key={id}>
      <div className="card-body">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h5 className="text-green-600 mb-0 font-bold text-xl">
              Complete {title}
            </h5>
            <span className="font-bold text-red-600">{sub}</span>
          </div>
          <div className="text-start">
            <small className="text-gray-400 font-bold">Quest resets</small>
            <h6 className="text-gray-400 text-base mb-0 text-right">Daily</h6>
          </div>
        </div>
        <div class="w-full h-8 bg-gray-200 rounded-md">
          <div class="h-8 bg-gray-200 rounded-md" style={{ width: "" }}></div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="text-start">
            <small className="text-green-600 font-bold">Progress So Far</small>
            <h6 className="text-green-600 mb-0 text-base">{progress}</h6>
          </div>
          <div className="text-right">
            <small className="text-blue-600 font-bold">Goal</small>
            <h6 className="text-blue-600 mb-0 text-base">{goal}</h6>
          </div>
        </div>
        <div className="grid gap-2 w-full">
          <Button
            className="bg-skin-button-brown text-skin-base"
            icon=<FaTrophy />
            text={claim}
          >
            <FaTrophy className="mr-2" /> {claim}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Quest;
