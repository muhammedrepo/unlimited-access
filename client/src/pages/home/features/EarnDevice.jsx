import { FaDesktop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa';
import { parallax } from '../../../assets';
import EarnDeviceItem from './EarnDeviceItem';

const devices = [
  {
    id: 1,
    icon: <FaMobileAlt />,
    text: 'Mobile',
  },
  {
    id: 2,
    icon: <FaTabletAlt />,
    text: 'Tablet',
  },
  {
    id: 3,
    icon: <FaDesktop />,
    text: 'Desktop',
  },
];
const paraBG = {
  backgroundImage: `url(${parallax})`,
  backgroundRepeat: 'repeat',
};

const EarnDevice = () => {
  const renderedItem = devices.map((device) => {
    return <EarnDeviceItem key={device.id} device={device} />;
  });

  return (
    <section className='mt-20'>
      <div
        className='w-full h-96 bg-fixed bg-cover bg-center  py-16'
        style={paraBG}
      >
        <div className='flex flex-col items-center text-center mx-auto max-w-screen-lg px-4'>
          <h3 className='mb-2 text-white'>
            Earn money from all of your available devices.
          </h3>
          <p className='text-white'>
            Use CloutZap to earn money from your Computer, Android, iPhone &amp;
            iPad devices.
          </p>
          <div className='w-full flex justify-between mt-6'>{renderedItem}</div>
        </div>
      </div>
    </section>
  );
};

export default EarnDevice;
