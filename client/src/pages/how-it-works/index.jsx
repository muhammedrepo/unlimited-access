import { BreadCrumb } from '../../components';
import HowSteps from './features/HowSteps';
import MethodList from './features/MethodList';
import CountList from './features/CountList';

const HowItWorks = () => {
  return (
    <main className='pt-20 sm:pt-28'>
      <BreadCrumb
        title='HOW COOLZYTE WORKS'
        subtitle='Its very easy to get started with Coolzyte.'
        page='How It Works'
      />

      <section className='px-4 mx-auto max-w-screen-xl pt-4 pb-0 mb-5'>
        <div className='text-center'>
          <h3>Learn How To Earn Money with Coolzyte!</h3>
          <p className='mb-0'>Users like you have already received</p>
          <CountList />
          <p className='mb-0'>in Cash by Coolzyte.</p>
        </div>
      </section>
      <HowSteps />
      <MethodList />
    </main>
  );
};

export default HowItWorks;
