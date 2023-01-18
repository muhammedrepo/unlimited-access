import { FaArrowDown } from "react-icons/fa";

const InvoiceContent = () => {
  return (
    <div className="modal-body relative p-4 flex-1">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex-1">
          <img
            src="https://cloutzap.com/paymentsbrand/paypal.png"
            alt="Payments"
          />
        </div>
        <div className="col-auto">
          <span className="badge badge-lg badge-warning text-dark">
            <i className="fa-solid fa-spinner fa-spin me-2"></i>
            Processing
          </span>
        </div>
      </div>
      <div className="row mt-6 mb-4 text-sm">
        <div className="flex-1">
          <p className="mb-0 font-bold flex items-center gap-x-0">
            Payment Method <FaArrowDown />
          </p>
          <span className="text-skin-muted">
            PayPal : <b>coolzyte@gmail.com</b>
          </span>
        </div>
      </div>
      <div className="row mb-4 text-sm">
        <div className="flex-1">
          <p className="mb-0 font-bold flex items-center gap-x-0">
            Full Name <FaArrowDown />
          </p>
          <span className="text-skin-muted">Tunde Tijani</span>
        </div>
      </div>
      <div className="flex flex-wrap text-sm">
        <div className="flex-1">
          <p className="mb-0 font-bold flex items-center gap-x-0">
            Amount Withdrawn <FaArrowDown />
          </p>
          <span className="text-skin-muted font-medium">
            $<span id="paymentAmount">2404</span>
          </span>
        </div>
      </div>
      <hr className="mt-2 mb-2" />
      <div className="row">
        <div className="flex-1 text-center text-sm">
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
          <p className="text-skin-muted font-medium my-4">
            Now, our team will review your stats to make sure all your stats are
            authetic and you have not cheated the system in order to generate
            this amount. Your clicks, referrals, tasks completed and social post
            submissions will be checked for fraudulent activity such as fake
            referrals, spam clicks, bogus or duplicate social post submissions
            or Deleting a social post after submitting it. Read More:{" "}
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
          <p className="font-medium text-skin-muted my-4">
            In the rare case that you do not receive your payment on the
            scheduled date, please contact us using the live chat section in{" "}
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
            <span className="font-bold">What's Next?</span> While we verify your
            stats, you can earn even more. It's time to climb up the Leaderboard
            and be a Top Earner.
          </p>
          <p className="text-skin-muted">
            Top earners get featured on our leaderboard section.{" "}
            <span className="font-bold">
              Top members also get their payments within 5-10 minutes, as there
              stats have been VERIFIED by our team. Being verified means you are
              eligible to request Instant Money.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceContent;
