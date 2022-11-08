import React from "react";
import { Link } from "react-router-dom";

const VideoPostList = ({ id, name, bonus, icon, bgColor, path }) => {
  return (
    <li
      key={id}
      className=" flex items-center font-semibold  border-t border-gray-100 mt-3 pt-2"
    >
      <Link to={path} className=" flex items-start">
        <span className="text-5xl mr-4 font-medium" style={{ color: bgColor }}>
          {icon}
        </span>
      </Link>
      <div className="self-center flex-1">
        <Link to={path} className=" flex">
          <h6
            className="mt-0 font-semibold flex items-start text-sm"
            style={{ color: bgColor }}
          >
            {name}
          </h6>
        </Link>
        <Link
          to={path}
          className="text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          {bonus}
        </Link>
      </div>
    </li>
  );
};

export default VideoPostList;
