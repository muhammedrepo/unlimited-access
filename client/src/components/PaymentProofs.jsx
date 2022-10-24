import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Button from "./Button";

const images = [
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_1.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_3.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_9.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_4.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_1.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_3.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_9.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_4.jpg",
  },
];

const PaymentProofs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col items-center justify-center mb-14">
        <div className="bg-green-100 text-xs font-normal p-1">
          Payment Proofs
        </div>
        <h3 className="font-semibold mb-0">Payments &amp; Users Review</h3>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {images.map((image, index) => {
            const { url } = image;

            return (
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <img
                  key={index}
                  src={url}
                  alt="img"
                  className="w-full"
                  onClick={() => setIsOpen(true)}
                />
              </div>
            );
          })}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[imgIndex].url}
            nextSrc={images[(imgIndex + 1) % images.length].url}
            prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setImgIndex((imgIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setImgIndex((imgIndex + 1) % images.length)
            }
          />
        )}
      </div>
      <div className="mt-14 text-center">
        <Button
          icon={<FaStar />}
          text="watch more reviews"
          url="/reviews"
          bgColor="green"
        />
      </div>
    </div>
  );
};

export default PaymentProofs;
