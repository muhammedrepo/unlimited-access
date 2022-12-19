import React from "react";
import { Link } from "react-router-dom";
import { logo, logofooter } from "../assets";

const Logo = ({ footer }) => {
  return (
    <Link to="/landing" className="relative flex items-center max-h-full ">
      <img
        src={footer ? logofooter : logo}
        alt="logo"
        className="h-14 sm:h-20"
      />
    </Link>
  );
};

export default Logo;
