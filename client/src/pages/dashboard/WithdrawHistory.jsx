import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { Button } from "../../components";
import { Breadcrumb, Modal } from "../../components/dashboard";
import { Card, CardHeader } from "../../components/UI";

import {
  InvoiceContent,
  ProcessingTable,
  TransactionLists,
} from "../../features/withdrawHistory-feature";

const WithdrawHistory = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div className="modal-footer flex flex-shrink-0 items-center justify-end p-3 border-t border-gray-200">
      <Button
        className="bg-skin-button-brown text-skin-base"
        onClick={handleClose}
      >
        <FaRegWindowClose className="mr-2" /> Dismiss
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} title="Payment Invoice">
      <InvoiceContent />
      {actionBar}
    </Modal>
  );

  return (
    <div className="relative">
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
          <ProcessingTable openModal={handleClick} />
        </Card>
      </section>
      {showModal && modal}
    </div>
  );
};

export default WithdrawHistory;
