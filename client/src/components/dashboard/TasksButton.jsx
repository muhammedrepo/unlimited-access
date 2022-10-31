const TasksButton = ({ icon, title, number }) => {
  return (
    <div className="flex py-2 text-center bg-green-600 rounded-lg border border-gray-200 shadow-sm">
      <div className="grid grid-cols-3 text-white w-full items-center">
        <span className="grid place-content-end text-5xl">{icon}</span>

        <div className="">
          <div>
            <span className="m-0 font-medium">{title}</span>
            <h4 className="mb-0">
              <span className="text-white text-2xl font-semibold">
                {number}
              </span>
            </h4>
          </div>
        </div>
        <span className="grid place-content-end opacity-20 -mr-6 text-9xl">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default TasksButton;
