import { useState } from 'react';
import { Alert } from '../../components';
import { Breadcrumb } from '../../components/dashboard';
import { useAppContext } from '../../context/appContext';
import {
  ChangePassword,
  MyProfile,
  PaymentDetails,
  SetPaymentMethod,
} from '../../features/myAccount-feature';

const MyAccount = () => {
  const [paymentList, setPaymentList] = useState([]);
  const { showAlert } = useAppContext();

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
      <main className='pt-6'>
        {showAlert && <Alert />}

        <div className='grid grid-cols-1 gap-y-6 lg:gap-6 lg:grid-cols-3'>
          <MyProfile />
          <div className='col-span-2'>
            <ChangePassword />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6 pt-6'>
          <SetPaymentMethod onAddPayment={handleAddPayment} />
          <PaymentDetails details={paymentList} />
        </div>
      </main>
    </div>
  );
};

export default MyAccount;
