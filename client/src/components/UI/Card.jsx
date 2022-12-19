const Card = ({ children }) => {
  return (
    <div className="p-7 rounded-lg bg-skin-base border border-gray-200 shadow-md">
      {children}
    </div>
  );
};

export default Card;
