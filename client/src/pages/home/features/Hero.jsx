import { FaMoneyBillWave, FaRegSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTextRotator from 'react-text-rotator';
import { Button } from '../../../components';

import { useAppContext } from '../../../context/appContext';

const contentA = [
  {
    text: '$500',
    className: 'classA',
    animation: 'squeeze',
  },
  {
    text: '$1000',
    className: 'classB',
    animation: 'squeeze',
  },
];

const contentB = [
  {
    text: 'Daily!',
    className: 'classA',
    animation: 'squeeze',
  },
  {
    text: 'Today!',
    className: 'classB',
    animation: 'squeeze',
  },
];

const contentC = [
  {
    text: 'INFLUENCER',
    className: 'classA',
    animation: 'squeeze',
  },
  {
    text: 'CLOUT',
    className: 'classB',
    animation: 'squeeze',
  },
];

const contentD = [
  {
    text: 'Home!',
    className: 'classA',
    animation: 'squeeze',
  },
  {
    text: 'School!',
    className: 'classB',
    animation: 'squeeze',
  },
];

const Hero = () => {
  const { user } = useAppContext();
  return (
    <section className='py-8 lg:pt-12 lg:pb-16'>
      <div className='px-4 mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8 items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='flex items-center justify-around'>
              <span>Make</span>
              <span className='mx-1'>
                <ReactTextRotator
                  content={contentA}
                  time={5000}
                  startDelay={2000}
                />
              </span>
              <span className='ml-1'>
                <ReactTextRotator
                  content={contentB}
                  time={5000}
                  startDelay={2500}
                />
              </span>
            </h1>
            <h3 className='flex items-center justify-around'>
              <span>Welcome To The #1</span>
              <span className='mx-1'>
                <ReactTextRotator
                  content={contentC}
                  time={5000}
                  startDelay={3000}
                />
              </span>
              Network
            </h3>
            <h2 className='flex space-x-2 tracking-wide'>
              Earn Money At
              <ReactTextRotator
                content={contentD}
                time={5000}
                startDelay={2000}
              />
            </h2>
          </div>
          <div className='text-center'>
            <p className='mb-8 lg:px-16'>
              Earn money for clicks on your referral link, referral sign ups and
              completing simple tasks. Use the power of your social media to
              make money online. Enjoy daily paychecks from the comfort of your
              home.
            </p>
            {user ? (
              <Link to='/'>
                <Button btnDark>Back to my dashboard</Button>
              </Link>
            ) : (
              <Link to='/register'>
                <Button primary className='flex-col'>
                  <span className='text-2xl m-0'>Sign Up Now </span>
                  <span className='font-normal italic'>
                    Sign up now for $35 Bonus!
                  </span>
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <Link to='/review'>
            <Button btnHero>
              <FaRegSmile className='mr-2' />
              Review
            </Button>
          </Link>
          <Link to='/proofs'>
            <Button btnHero>
              <FaMoneyBillWave className='mr-2' />
              Payment Proofs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
