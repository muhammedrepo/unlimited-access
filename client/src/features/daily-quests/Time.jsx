import { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = {
    HH: date.getHours(),
    MM: date.getMinutes(),
    SS: date.getSeconds(),
  };

  return (
    <main>
      <div className='mobile-clock-widget relative bg-blend-overlay flex items-center justify-center text-center text-white h-64 bg-cover bg-no-repeat bg-green-900'>
        <div>
          <Clock value={date} className='class1' />
        </div>
      </div>
      <div className='flex flex-wrap items-start card-body'>
        <div className='flex items-center space-x-2 font-bold mb-0'>
          Daily Quests will reset in <FaAngleDoubleDown className='ml-2' />
          <hr />
        </div>
        <div className='flex flex-1 text-center justify-around'>
          <div>
            <p className='font-semibold text-gray-400'>Hrs</p>
            <h4>
              <span>{formattedTime.HH}</span>
            </h4>
          </div>
          <div>
            <p className='font-semibold text-gray-400'>Min</p>
            <h4>
              <span>{formattedTime.MM}</span>
            </h4>
          </div>
          <div>
            <p className='font-semibold text-gray-400'>Sec</p>
            <h4>
              <span>{formattedTime.SS}</span>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Time;
