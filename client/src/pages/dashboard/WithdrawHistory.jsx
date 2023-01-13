import { useState } from "react";
import { Breadcrumb } from "../../components/dashboard";
import { Card, CardHeader } from "../../components/UI";

import {
  PaymentInvoice,
  ProcessingTable,
  TransactionLists,
} from "../../features/withdrawHistory-feature";

const WithdrawHistory = () => {
  const [invoice, setInvoice] = useState(false);

  const openInvoiceModal = () => {
    setInvoice(!invoice);
  };
  return (
    <div className="relative">
      {invoice && <PaymentInvoice openInvoiceModal={openInvoiceModal} />}

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
          <ProcessingTable openInvoiceModal={openInvoiceModal} />
        </Card>
      </section>
    </div>
  );
};

export default WithdrawHistory;
