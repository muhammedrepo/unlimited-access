import className from "classnames";

const CardHeader = ({ title, subtitle, icon, ...rest }) => {
  const classes = className(
    rest.className,
    "relative font-semibold text-gray-800 bg-skin-base p-7 border-l-4 border-green-800"
  );
  return (
    <div {...rest} className={classes}>
      <h5
        className={`${
          icon ? "flex gap-x-2" : ""
        } text-xl font-semibold capitalize mb-0`}
      >
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
