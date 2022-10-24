import React from "react";
import { FaDesktop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { parallax } from "../images";

const devices = [
  {
    id: 1,
    icon: <FaMobileAlt />,
    text: "Mobile",
  },
  {
    id: 2,
    icon: <FaTabletAlt />,
    text: "Tablet",
  },
  {
    id: 3,
    icon: <FaDesktop />,
    text: "Desktop",
  },
];
const paraBG = {
  backgroundImage: `url(${parallax})`,
  backgroundRepeat: "repeat",
};

const EarnDevice = () => {
  return (
    <div
      className="w-full h-96 bg-fixed bg-cover bg-center  py-16"
      style={paraBG}
    >
      <div className="flex flex-col items-center mx-auto max-w-screen-xl px-4">
        <h3 className="mb-1 text-white">
          Earn money from all of your available devices.
        </h3>
        <p className="text-white">
          Use CloutZap to earn money from your Computer, Android, iPhone &amp;
          iPad devices.
        </p>
        <div className="w-full flex justify-between">
          {devices.map((device) => {
            const { id, icon, text } = device;

            return (
              <div key={id} className="mt-5">
                <div className="flex flex-col items-center justify-center mb-10">
                  <div className="flex justify-center items-center w-10 h-10 bg-green-800 rounded-full lg:h-12 lg:w-12 text-white">
                    {icon}
                  </div>
                  <div className="mt-2">
                    <h3 className="text-white">{text}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EarnDevice;
