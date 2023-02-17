import { useState } from "react";
import { Breadcrumb } from "../../components/dashboard";
import {
  ChangePassword,
  MyProfile,
  PaymentDetails,
  SetPayment,
} from "../../features/myAccount-feature";

const MyAccount = () => {
  const [value, setValue] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Add payment");
  const [detail, setDetail] = useState("");

  const handleSelect = (option) => {
    setValue(option);
  };

  const handleSubmit = () => {
    setPaymentMethod(value.label);
  };

  const options = [
    { id: 1, label: "PayPal" },
    { id: 2, label: "Cash App" },
    { id: 3, label: "Venmo" },
    { id: 4, label: "Bitcoin" },
    { id: 5, label: "Ethereum" },
    { id: 6, label: "Mailed Check" },
  ];
  return (
    <div>
      <Breadcrumb title="My Account" page="Edit Account" />
      <main className="pt-14">
        <section>
          <div className="grid grid-cols-1 gap-y-6 lg:gap-6 lg:grid-cols-3">
            <MyProfile />
            <div className="col-span-2">
              <ChangePassword />
            </div>
          </div>
        </section>
        <section className="pt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <SetPayment
              options={options}
              value={value}
              onChange={handleSelect}
              submitPayment={handleSubmit}
              detail={detail}
              setDetail={setDetail}
            />
            <PaymentDetails paymentMethod={paymentMethod} detail={detail} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyAccount;
