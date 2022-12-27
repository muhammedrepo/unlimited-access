import { Breadcrumb } from "../../components/dashboard";

import { OverallProgress, PaymentMethod } from "../../features/withdraw";

const Withdraw = () => {
  return (
    <div>
      <Breadcrumb title="Withdraw" page="Cashout" />
      <OverallProgress />
      <PaymentMethod />
    </div>
  );
};

export default Withdraw;
