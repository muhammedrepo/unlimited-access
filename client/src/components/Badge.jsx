import className from "classnames";

const Badge = ({ children, color, ...rest }) => {
  const classes = className(
    rest.className,
    `${color} inline-flex text-xs font-medium p-1 border rounded-md p-2 mb-4 text-center `
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default Badge;
