import React from "react";
import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { manyWays } from "../../utils/data";
import Card from "../UI/Card";

const WaysToEarn = () => {
  return (
    <Card>
      <div className="card-header b-l-primary border-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Many Ways To Earn
        </h5>
        <p className="font-normal text-gray-700">
          Some of the many ways you can use to Earn hundreds of dollars daily!
        </p>
      </div>
      <div className="card-body p-7">
        <div className="grid md:grid-cols-2 gap-6">
          {manyWays.map((way) => {
            const { id, title, subtitle, icon, path } = way;

            return (
              <div
                key={id}
                className="p-4 bg-white rounded-lg border border-gray-200 text-center"
              >
                <Link to={path}>
                  <div className="flex flex-col items-center">
                    <div className="grid place-items-center text-green-600 text-2xl mb-4 w-12 h-12 rounded-full bg-white border-8 border-gray-200 lg:h-20 lg:w-20">
                      {icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-500">
                      {title}
                    </h3>
                  </div>
                  <hr className="my-8 h-px bg-gray-200 border-0" />
                  <p className="text-green-600 font-semibold">{subtitle}</p>
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
