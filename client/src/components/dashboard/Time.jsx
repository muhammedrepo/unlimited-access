import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

import { FaAngleDoubleDown } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  .class1 .react-clock__face {
    border: 1px solid white;
  }

  .class1 .react-clock__hand__body {
    background-color: white;
  }

  .class1 .react-clock__mark__body {
    background-color: white;
  }
`;

const Time = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const format = {
    HH: value.getHours(),
    MM: value.getMinutes(),
    SS: value.getSeconds(),
  };

  return (
    <Wrapper>
      <div className="mobile-clock-widget relative bg-blend-overlay flex items-center justify-center text-center text-white h-64 bg-cover bg-no-repeat bg-green-900">
        <div>
          <Clock value={value} className="class1" />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-start card-body">
          <div className="flex items-center space-x-2 font-bold mb-0">
            Daily Quests will reset in <FaAngleDoubleDown className="ml-2" />
            <hr />
          </div>
          <div className="flex flex-1 text-center justify-around">
            <div>
              <p className="font-semibold text-gray-400">Hrs</p>
              <h4>
                <span>{format.HH}</span>
              </h4>
            </div>
            <div>
              <p className="font-semibold text-gray-400">Min</p>
              <h4>
                <span>{format.MM}</span>
              </h4>
            </div>
            <div>
              <p className="font-semibold text-gray-400">Sec</p>
              <h4>
                <span>{format.SS}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Time;
