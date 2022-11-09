import {
  Breadcrumb,
  Payments,
  ProcessingTable,
} from "../../components/dashboard";
import { Card, CardHeader } from "../../components/UI";
import { paymentHistory } from "../../utils/data";

const WithdrawHistory = () => {
  return (
    <div>
      <Breadcrumb title="Payments" page="Withdraw History" />
      <section className="pt-12">
        <div className="grid md:grid-cols-2 gap-6">
          {paymentHistory.map((payment) => {
            return <Payments key={payment.id} {...payment} />;
          })}
        </div>
      </section>
      <section className="pt-14">
        <Card>
          <CardHeader
            title="Your Payment"
            subtitle="This is where your requested payment is shown."
          />

          <ProcessingTable />
        </Card>
      </section>
    </div>
  );
};

export default WithdrawHistory;
