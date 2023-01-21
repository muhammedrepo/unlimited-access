import className from "classnames";

const Card = ({ children, ...rest }) => {
  const classes = className(
    rest.className,
    "relative rounded bg-skin-base border border-gray-200 shadow-md transition-all"
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default Card;
