import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import { Card, CardHeader } from "../../components/UI";

const SetPayment = ({ options, value, onChange, submitPayment, detail }) => {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.id} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <Card>
      <div>
        <CardHeader title="Set Payment Method" />

        <div className="card-body">
          <div className="row">
            <div className="mb-3">
              <div className="mb-3">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor=""
                >
                  PAYMENT METHOD
                </label>
                <div
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  ref={divEl}
                >
                  <div onClick={handleClick}>
                    {value?.label || "Select Payment Type"}
                  </div>
                  {isOpen && <div>{renderedOptions}</div>}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label block mb-2 text-sm font-medium text-gray-900">
                PAYMENT DETAILS
              </label>
              <div
                className="form-control block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your PayPal email, CASH TAG, Venmo, Bitcoin or Ethereum
                wallet address OR Enter an Address where you want us to Mail
                your Cash Check."
              >
                {detail}
              </div>
            </div>
            <div className="form-footer">
              <Button btnDark onClick={submitPayment}>
                Add Payment Method
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SetPayment;
