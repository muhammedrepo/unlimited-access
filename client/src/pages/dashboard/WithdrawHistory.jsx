import { Breadcrumb } from "../../components/dashboard";
import { Card, CardHeader } from "../../components/UI";

import {
  ProcessingTable,
  TransactionLists,
} from "../../features/withdrawHistory-feature";

const WithdrawHistory = () => {
  return (
    <div>
      <Breadcrumb title="Payments" page="Withdraw History" />

      <section className="pt-14">
        <div className="mb-8">
          <TransactionLists />
        </div>
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
