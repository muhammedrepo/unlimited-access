import { BsBoxArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getTraffic } from "../../utils/data";
import { CardHeader } from "../UI";
import Card from "../UI/Card";

const GetFreeTraffic = () => {
  const renderedItems = getTraffic.map((button) => {
    const { icon, buttonColor, title, path } = button;

    return (
      <li key={buttonColor} className="flex items-start border-after-xs mb-2">
        <span className="mr-4 text-4xl">
          <span style={{ color: buttonColor }}>{icon}</span>
        </span>
        <div className="flex-1 self-center grid">
          <Link
            to={path}
            className="text-white capitalize focus:ring-4 w-full focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mb-2"
            style={{
              backgroundColor: buttonColor,
            }}
          >
            {title}
          </Link>
        </div>
      </li>
    );
  });

  return (
    <Card>
      <CardHeader
        icon=<BsBoxArrowUp />
        title="Get Free Traffic And Earn"
        subtitle="On average, our users TRIPLE their earnings after sharing their
          referral link on social media websites."
      />

      <div className="card-body">
        <ul
          className="h-64 overflow-auto xl:h-full xl:overflow-hidden"
          style={{ lineHeight: "1" }}
        >
          {renderedItems}
        </ul>
      </div>
    </Card>
  );
};

export default GetFreeTraffic;
