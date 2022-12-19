const CardHeader = ({ title, subtitle, icon }) => {
  return (
    <div className="relative font-semibold text-gray-800 bg-skin-base mb-8">
      <h5 className={`${icon ? "flex gap-x-2" : ""} text-2xl capitalize mb-0`}>
        {icon}
        {title}
      </h5>
      <span className="font-normal text-skin-muted text-sm tracking-wide">
        {subtitle}
      </span>
    </div>
  );
};

export default CardHeader;
