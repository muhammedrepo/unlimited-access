import React from "react";
import { FaDesktop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { parallax } from "../../images";

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
      <div className="flex flex-col items-center text-center mx-auto max-w-screen-lg px-4">
        <h3 className="mb-2 text-white">
          Earn money from all of your available devices.
        </h3>
        <p className="text-white">
          Use CloutZap to earn money from your Computer, Android, iPhone &amp;
          iPad devices.
        </p>
        <div className="w-full flex justify-between mt-6">
          {devices.map((device) => {
            const { id, icon, text } = device;

            return (
              <div key={id} className="mt-5">
                <div className="flex flex-col items-center justify-center mb-10">
                  <div className="flex justify-center items-center w-12 h-12 bg-green-800 rounded-full lg:h-14 lg:w-14 text-white text-2xl">
                    {icon}
                  </div>
                  <div className="mt-2">
                    <h3 className="text-white text-lg">{text}</h3>
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
