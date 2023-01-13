import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { paymentProofImages } from "../../utils/data";
import Badge from "../Badge";
import Button from "../Button";
import PaymentProofItem from "./PaymentProofItem";

let images = paymentProofImages;

const PaymentProofs = () => {
  const renderedImages = images.map((image, index) => (
    <PaymentProofItem key={index} image={image} />
  ));

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col items-center justify-center mb-14">
        <Badge>Payment Proofs</Badge>
        <h3 className="font-semibold mb-0">Payments &amp; Users Review</h3>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {renderedImages}
        </div>
      </div>
      <div className="mt-14 text-center">
        <Link to="/review">
          <Button primary>
            <FaStar className="mr-2" />
            Watch More Reviews
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentProofs;
