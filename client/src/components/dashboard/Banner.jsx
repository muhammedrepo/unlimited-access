const Banner = ({ children, bgColor }) => {
  return (
    <span
      className={`absolute top-3 left-0 z-2 bg-skin-${bgColor} text-skin-base text-base font-semibold px-5 py-0.5`}
    >
      {children}
    </span>
  );
};

export default Banner;
