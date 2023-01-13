const EarnDeviceItem = ({ device }) => {
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex justify-center items-center w-12 h-12 bg-green-800 rounded-full lg:h-14 lg:w-14 text-white text-2xl">
          {device.icon}
        </div>
        <div className="mt-2">
          <h3 className="text-white text-lg">{device.text}</h3>
        </div>
      </div>
    </div>
  );
};

export default EarnDeviceItem;
