import { useState } from 'react';
import { Breadcrumb } from '../../components/dashboard';
import {
  ChangePassword,
  MyProfile,
  PaymentDetails,
  SetPaymentMethod,
} from '../../features/myAccount-feature';

const MyAccount = () => {
  const [paymentList, setPaymentList] = useState([]);

  const handleAddPayment = (pMethod, pDetail) => {
    setPaymentList((prevPaymentList) => {
      return [
        ...prevPaymentList,
        {
          method: pMethod,
          detail: pDetail,
        },
      ];
    });
  };

  return (
    <div>
      <Breadcrumb title='My Account' page='Edit Account' />
      <main className='pt-14'>
        <section>
          <div className='grid grid-cols-1 gap-y-6 lg:gap-6 lg:grid-cols-3'>
            <MyProfile />
            <div className='col-span-2'>
              <ChangePassword />
            </div>
          </div>
        </section>
        <section className='pt-12'>
          <div className='grid md:grid-cols-2 gap-6'>
            <SetPaymentMethod onAddPayment={handleAddPayment} />
            <PaymentDetails details={paymentList} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyAccount;
