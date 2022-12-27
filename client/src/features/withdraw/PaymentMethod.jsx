import React from "react";
import { FaCaretDown, FaExchangeAlt, FaPaypal } from "react-icons/fa";
import { Button, FormRow } from "../../components";
import { Card } from "../../components/UI";

const PaymentMethod = () => {
  return (
    <section className="pt-14">
      <div className="max-w-lg mx-auto">
        <Card>
          <div className="card-body">
            <div>
              <h4 className="font-bold text-2xl mb-1">AMOUNT</h4>
              <p className="flex items-center text-muted mb-1 font-semibold">
                Your Current Balance <FaCaretDown />
              </p>

              <FormRow type="text" disabled="disabled" value="$137" />
            </div>
            <div>
              <h4 className="font-bold mt-4 mb-1 text-2xl">PAYMENT METHOD</h4>
              <div className="input-group relative flex items-center w-full">
                <span className="absolute p-2">
                  <FaPaypal style={{ color: "#0079C1" }} />
                </span>
                <FormRow type="text" disabled="disabled" />
              </div>
            </div>
            <div className="grid gap-2 w-full mt-4">
              <Button className="bg-skin-green-dark text-skin-base">
                <FaExchangeAlt className="mr-2" />
                Withdraw
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PaymentMethod;
