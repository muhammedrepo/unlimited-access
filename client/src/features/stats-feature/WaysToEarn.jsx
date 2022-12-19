import { Link } from "react-router-dom";
import { manyWays } from "../../utils/data";
import Card from "../../components/UI/Card";
import { CardHeader } from "../../components/UI";

const WaysToEarn = () => {
  return (
    <Card>
      <CardHeader
        title="Many Ways To Earn"
        subtitle="Some of the many ways you can use to Earn hundreds of dollars daily!"
      />

      <div className="card-body p-7">
        <div className="grid md:grid-cols-2 gap-6">
          {manyWays.map((way) => {
            const { id, title, subtitle, icon, path } = way;

            return (
              <div
                key={id}
                className="p-4 bg-skin-base rounded-lg border border-gray-200 text-center"
              >
                <Link to={path}>
                  <div className="flex flex-col items-center">
                    <div className="grid place-items-center text-skin-fill text-2xl mb-4 w-12 h-12 rounded-full bg-skin-base border-8 border-gray-200 lg:h-20 lg:w-20">
                      {icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-skin-muted">
                      {title}
                    </h3>
                  </div>
                  <hr className="my-8 h-px bg-gray-200 border-0" />
                  <p className="text-skin-fill font-semibold">{subtitle}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default WaysToEarn;
