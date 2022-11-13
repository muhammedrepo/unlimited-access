import { Link } from "react-router-dom";

const Button = ({ icon, text, url, bgColor }) => {
  return (
    <Link
      to={url}
      className={`text-white bg-${bgColor}-600 hover:bg-${bgColor}-500 border border-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 font-medium rounded-md text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 capitalize`}
    >
      <span className="mr-2"> {icon}</span>
      {text}
    </Link>
  );
};

export default Button;
