import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Question = ({
  title,
  info,
  id,
  bgColor,
  index,
  handleClick,
  isExpanded,
}) => {
  const icon = (
    <span className="text-white">
      {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
    </span>
  );

  return (
    <div>
      <h5 className="mb-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-4 font-medium text-left
    focus:ring-2 focus:ring-blue-200"
          onClick={() => handleClick(index)}
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="flex items-center gap-x-2 text-xl 
               text-white
             pl-6"
          >
            {id}. {title}
          </div>
          {icon}
        </button>
      </h5>
      {isExpanded && (
        <div>
          <div className="font-light border border-b-0 border-gray-200">
            {info}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
