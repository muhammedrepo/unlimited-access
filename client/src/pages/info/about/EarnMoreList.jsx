const EarnMoreList = ({ icon, title, subtitle }) => {
  return (
    <div className=" lg:mb-3">
      <div className="flex flex-wrap p-3 rounded-lg lg:p-5">
        <div className="flex flex-col items-center justify-center text-skin-base">
          <div className="flex justify-center items-center text-skin-base text-4xl mb-4 w-10 h-10 rounded-full bg-skin-green-dark lg:h-28 lg:w-28">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl uppercase">
            {title}
          </h3>
          <span className="mb-3 text-skin-muted ">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default EarnMoreList;
