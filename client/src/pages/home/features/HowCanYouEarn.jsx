import { BsBoxArrowInRight } from 'react-icons/bs';
import { FaQuestion, FaRegCheckCircle, FaUserPlus } from 'react-icons/fa';
import { earnMore } from '../../../utils/data';
import { Button } from '../../../components';
import { Link } from 'react-router-dom';

const HowCanYouEarn = () => {
  const renderedEarnMore = earnMore.map((item) => {
    const { id, subtitle } = item;

    return (
      <div key={id}>
        <p className='flex items-center font-medium'>
          <span className='mr-2 text-2xl'>
            <FaRegCheckCircle />
          </span>
          {subtitle}
        </p>
      </div>
    );
  });

  return (
    <section className='py-8 bg-green-600 text-white'>
      <div className='px-4 mx-auto max-w-screen-xl'>
        <div>
          <h3 className='flex items-center text-white'>
            <span className='mr-2'>
              <FaQuestion />
            </span>{' '}
            How can you earn more $$$ with cloutzap?
          </h3>
        </div>
        <div className='wrapper grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {renderedEarnMore}
        </div>
        <div className='flex justify-center mt-8'>
          <Link to='/register'>
            <Button secondary>
              <FaUserPlus className='mr-2' />
              Sign Up
            </Button>
          </Link>
          <Link to='/register'>
            <Button primary>
              <BsBoxArrowInRight className='mr-2' />
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowCanYouEarn;
