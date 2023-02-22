import React, { useEffect, useRef, useState } from 'react';
import { FaPaypal } from 'react-icons/fa';
import { SiCashapp } from 'react-icons/si';
import Button from '../../components/Button';
import { Card, CardHeader } from '../../components/UI';

const options = [
  { id: 1, label: 'PayPal', icon: <FaPaypal className='text-blue-500' /> },
  { id: 2, label: 'Cash App', icon: <SiCashapp className='text-green-500' /> },
  { id: 3, label: 'Venmo' },
  { id: 4, label: 'Bitcoin' },
  { id: 5, label: 'Ethereum' },
  { id: 6, label: 'Mailed Check' },
];

const SetPaymentMethod = ({ onAddPayment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enteredDetail, setEnteredDetail] = useState('');
  const [selectedOption, setSelectedOption] = useState();

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
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectedOption = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
  };

  const handleEnteredDetail = (e) => {
    setEnteredDetail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredDetail.trim().length === 0 || selectedOption === null) {
      console.log('Fill the input');
      return;
    }
    onAddPayment(selectedOption, enteredDetail);
    setSelectedOption(null);
    setEnteredDetail('');
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.id} onClick={() => handleSelectedOption(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <Card>
      <div>
        <CardHeader title='Set Payment Method' />

        <div className='card-body'>
          <form className='row' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <div className='mb-3'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-900'
                  htmlFor=''
                >
                  PAYMENT METHOD
                </label>
                <div
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                  ref={divEl}
                >
                  <div onClick={handleClick}>
                    {selectedOption?.label || 'Select Payment Type'}
                  </div>
                  {isOpen && <div>{renderedOptions}</div>}
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label className='form-label block mb-2 text-sm font-medium text-gray-900'>
                PAYMENT DETAILS
              </label>
              <input
                type='email'
                value={enteredDetail}
                onChange={handleEnteredDetail}
                className='form-control block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none'
                placeholder='Enter your PayPal email, CASH TAG, Venmo, Bitcoin or Ethereum
                wallet address OR Enter an Address where you want us to Mail
                your Cash Check.'
              />
            </div>
            <div className='form-footer'>
              <Button type='submit' btnDark>
                Add Payment Method
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default SetPaymentMethod;
