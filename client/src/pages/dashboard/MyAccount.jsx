import { Breadcrumb } from "../../components/dashboard";
import {
  ChangePassword,
  MyProfile,
  PaymentDetails,
  SetPayment,
} from "../../features/myAccount-feature";

const MyAccount = () => {
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
            <SetPayment />
            <PaymentDetails />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyAccount;
