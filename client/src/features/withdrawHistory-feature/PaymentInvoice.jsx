import { FaArrowDown, FaRegWindowClose } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Button } from "../../components";

const PaymentInvoice = ({ openInvoiceModal }) => {
  return (
    <div classNameName="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div classNameName="relative w-full h-full max-w-md md:h-auto">
        {/* Modal content  */}
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200">
            <h5 className="modal-title">
              Payment Invoice #<span id="paymentId">18636</span>
            </h5>

            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={openInvoiceModal}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="modal-body relative p-4 flex-1">
            {/* Card body */}
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex-1">
                <img
                  src="https://cloutzap.com/paymentsbrand/paypal.png"
                  alt="Payments"
                />
              </div>
              <div className="col-auto">
                <span className="badge badge-lg badge-warning text-dark">
                  <i className="fa-solid fa-spinner fa-spin me-2"></i>Processing
                </span>
              </div>
            </div>
            <div className="row mt-6 mb-4">
              <div className="flex-1">
                <p className="mb-0 font-bold">
                  Payment Method <FaArrowDown />
                </p>
                <span className="text-skin-muted">
                  PayPal : <b>coolzyte@gmail.com</b>
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="flex-1">
                <p className="mb-0 font-bold">
                  Full Name <FaArrowDown />
                </p>
                <span className="text-skin-muted">Tunde Tijani</span>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="flex-1">
                <p className="mb-0 font-bold">
                  Amount Withdrawn <FaArrowDown />
                </p>
                <span className="text-skin-muted font-medium">
                  $<span id="paymentAmount">2404</span>
                </span>
              </div>
            </div>
            <hr className="mt-2 mb-2" />
            <div className="row">
              <div className="flex-1 text-center">
                <p className="font-medium">
                  <b>Greetings,</b> Your request to withdraw{" "}
                  <b>
                    $
                    <span id="paymentAmount2" className="font-bold">
                      2404
                    </span>
                  </b>{" "}
                  to your payment method: <b>PayPal</b> have been successfully
                  registered in our system.
                </p>
                <p className="text-skin-muted font-medium">
                  Now, our team will review your stats to make sure all your
                  stats are authetic and you have not cheated the system in
                  order to generate this amount. Your clicks, referrals, tasks
                  completed and social post submissions will be checked for
                  fraudulent activity such as fake referrals, spam clicks, bogus
                  or duplicate social post submissions or Deleting a social post
                  after submitting it. Read More:{" "}
                  <a
                    href="https://cloutzap.com/fraud-policy"
                    className="font-bold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fraud Policy Details
                  </a>
                  .
                </p>
                <p>
                  <b>
                    If your stats are authentic, your payment will be sent on
                    scheduled payment date.
                  </b>
                </p>
                <p className="font-medium text-skin-muted">
                  In the rare case that you do not receive your payment on the
                  scheduled date, please contact us using the live chat section
                  in{" "}
                  <a
                    href="https://cloutzap.com/help"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help page
                  </a>
                  . Thank you and happy earning.
                </p>
                <p className="font-medium">
                  <span className="font-bold">What's Next?</span> While we
                  verify your stats, you can earn even more. It's time to climb
                  up the Leaderboard and be a Top Earner.
                </p>
                <p className="text-skin-muted">
                  Top earners get featured on our leaderboard section.{" "}
                  <span className="font-bold">
                    Top members also get their payments within 5-10 minutes, as
                    there stats have been VERIFIED by our team. Being verified
                    means you are eligible to request Instant Money.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer flex flex-shrink-0 items-center justify-end p-3 border-t border-gray-200">
            <Button
              className="bg-skin-button-brown text-skin-base"
              onClick={openInvoiceModal}
            >
              <FaRegWindowClose className="mr-2" /> Dismiss
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInvoice;
