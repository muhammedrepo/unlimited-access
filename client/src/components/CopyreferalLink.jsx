import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import Button from './Button';
import FormRow from './FormRow';
import { useAppContext } from '../context/appContext';

const CopyreferalLink = () => {
  const [toggle, setToggle] = useState(false);
  const { user } = useAppContext();

  const referralLink = `http://send.localhost:500/${user.name}`;

  const copy = async () => {
    await navigator.clipboard.writeText(referralLink);
    setToggle(!toggle);
  };
  return (
    <div className='flex flex-col gap-y-4'>
      <FormRow type='text' value={referralLink} disabled />

      <Button btnCopy onClick={copy}>
        <FaCopy className='mr-2' />{' '}
        {toggle ? 'Referral Link copied' : 'Copy Link'}
      </Button>
    </div>
  );
};

export default CopyreferalLink;
