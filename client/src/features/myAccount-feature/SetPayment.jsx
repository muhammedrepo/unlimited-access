import React from "react";
import Button from "../../components/Button";
import { Card, CardHeader } from "../../components/UI";

const SetPayment = () => {
  return (
    <Card>
      <form>
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
                <select
                  className="form-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="payment_method"
                >
                  <option value="PayPal" selected="">
                    PayPal
                  </option>
                  <option value="Cash App">Cash App</option>
                  <option value="Venmo">Venmo</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Mailed Check">Mailed Check</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label block mb-2 text-sm font-medium text-gray-900">
                PAYMENT DETAILS
              </label>
              <textarea
                name="payment_details"
                rows="5"
                className="form-control block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your PayPal email, CASH TAG, Venmo, Bitcoin or Ethereum wallet address OR Enter an Address where you want us to Mail your Cash Check."
                required=""
              >
                coolzyte@gmail.com
              </textarea>
            </div>
            <div className="form-footer">
              <Button text="Add Payment Method" bgColor="green" />
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SetPayment;
