import { paymentHistory } from "../../utils/data";
import TransactionList from "./TransactionList";

const TransactionLists = () => {
  return (
    <section className="pt-12">
      <div className="grid md:grid-cols-2 gap-6">
        {paymentHistory.map((payment) => {
          return <TransactionList key={payment.id} {...payment} />;
        })}
      </div>
    </section>
  );
};

export default TransactionLists;
