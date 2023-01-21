import { paymentHistory } from "../../utils/data";
import TransactionList from "./TransactionList";

const TransactionLists = () => {
  const renderedPayments = paymentHistory.map((payment) => {
    return <TransactionList key={payment.id} {...payment} />;
  });

  return (
    <section className="pt-12">
      <div className="grid md:grid-cols-2 gap-6">{renderedPayments}</div>
    </section>
  );
};

export default TransactionLists;
