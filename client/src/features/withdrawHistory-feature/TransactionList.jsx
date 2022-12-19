import { Card } from "../../components/UI";

const TransactionList = ({ icon, title, sub }) => {
  return (
    <Card>
      <div className="card-body text-center flex flex-col items-center">
        <div className="flex justify-center items-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 text-green-600 text-2xl">
          {icon}
        </div>
        <p className="my-2">{title}</p>
        <h5>
          <span className="font-semibold">{sub}</span>
        </h5>
      </div>
    </Card>
  );
};

export default TransactionList;
