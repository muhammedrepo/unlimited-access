import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components/dashboard";
import Card from "../../components/UI/Card";
import { postandearn } from "../../utils/data";

const SocialPosts = () => {
  return (
    <div>
      <Breadcrumb title="Social Posts" page="Get Paid To Post" />
      <section className="mt-14">
        <Card>
          <div class="card-header pb-0">
            <h5 className="flex gap-x-2 text-2xl">
              <FaShareSquare className="text-green-600" /> Post And Earn
            </h5>
            <span>
              Get Paid for posting on your Social Media. Choose a platform from
              below to begin!
            </span>
          </div>
          <div className="card-body">
            <ul>
              {postandearn.map((item) => {
                const { id, name, bonus, icon, bgColor, path } = item;
                return (
                  <li
                    key={id}
                    className=" flex items-center font-semibold  border-t border-gray-100 mt-3 pt-3"
                  >
                    <Link to={path} className=" flex items-start">
                      <span
                        className="text-5xl mr-4 font-medium"
                        style={{ color: bgColor }}
                      >
                        {icon}
                      </span>
                    </Link>
                    <div className="self-center flex-1">
                      <Link to={path} className=" flex">
                        <h6
                          className="mt-0 font-semibold flex items-start text-sm"
                          style={{ color: bgColor }}
                        >
                          {name}
                        </h6>
                      </Link>
                      <Link
                        to={path}
                        className="text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
                        style={{ backgroundColor: bgColor }}
                      >
                        {bonus}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default SocialPosts;
