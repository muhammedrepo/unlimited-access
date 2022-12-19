import React from "react";
import { Counter } from "../../../components";

const count = [
  {
    id: 1,
    num: "210000",
    text: "Monthly Active Users",
  },
  {
    id: 2,
    sym: "$",
    num: "22",
    text: "Paid Out To Users",
  },
  {
    id: 3,
    sym: "$",
    num: "10000",
    text: "Our Users Average Monthly Pay",
  },
  {
    id: 4,
    num: "4",
    text: "Years Of Experience",
  },
];
const MapCounter = () => {
  return (
    <div className="lg:-mt-48 px-4">
      <div className="relative border-t-2 border-dashed border-gray-200 pt-10 flex flex-wrap lg:justify-between m-0 w-full">
        {count.map((item) => {
          const { id, num, text, sym } = item;

          return (
            <div
              key={id}
              className="relative flex flex-col items-center text-center mx-auto max-w-screen-xl"
            >
              <div className="hidden lg:block lg:-top-12 lg:left-1/2 lg:absolute  w-3.5 h-3.5 bg-green-800 rounded-full border-2 border-white"></div>
              <div className="flex w-1/2 lg:w-1/4 text-xl lg:text-3xl text-green-800 font-bold mb-2">
                {sym}
                <span>
                  <Counter end={num} />
                </span>
                +
              </div>
              <h5 className="font-bold capitalize text-gray-500 mt-0">
                {text}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapCounter;
