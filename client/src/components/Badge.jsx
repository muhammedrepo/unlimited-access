const Badge = ({ children, color }) => {
  return (
    <div className={`${color} text-xs font-medium p-1 rounded-md`}>
      {children}
    </div>
  );
};

export default Badge;
