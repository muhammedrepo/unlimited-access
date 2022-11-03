import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Question = ({ title, info, id, bgColor }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <h5 className="mb-3">
        <button
          type="button"
          className="button"
          onClick={() => setShowInfo(!showInfo)}
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="flex items-center gap-x-2 text-xl 
               text-white
             pl-6"
          >
            {id}. {title}
          </div>
          <span className="text-white">
            {showInfo ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </span>
        </button>
      </h5>
      {showInfo && (
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
