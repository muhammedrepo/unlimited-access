import Card from "../UI/Card";
import Accordion from "./Accordion";

const SocialMediaGuide = ({ id, name, icon, badge, bgColor }) => {
  return (
    <Card>
      <div className="card-header pb-0">
        <div className="flex justify-between items-center mb-2">
          <div className="flex">
            <div
              className="flex justify-center items-center mr-4 w-6 h-6 text-white rounded-full xl:h-8 xl:w-8"
              style={{ backgroundColor: bgColor }}
            >
              {icon}
            </div>
            <div className="media-body">
              <h5 className="capitalize">{name}</h5>
              <h6 className="text-muted mb-0">#{id}</h6>
            </div>
          </div>
          <div
            className="text-white text-xs font-semibold px-2.5 py-0.5 rounded capitalize"
            style={{ backgroundColor: bgColor }}
          >
            {badge}
          </div>
        </div>
        <p className="mb-0 text-gray-500 font-medium">
          Follow the steps below to properly setup your {name} account for the
          best results!
        </p>
      </div>
      <div className="card-body">
        <Accordion name={name} />
      </div>
    </Card>
  );
};

export default SocialMediaGuide;
