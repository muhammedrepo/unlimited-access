import { Counter } from '../../../components';

const CountList = () => {
  return (
    <div className='flex items-center justify-center my-2 text-4xl font-semibold'>
      <span className='counter-num'>$</span>
      <span className='flex counter-text mr-2'>
        <span className='counter-num'>
          <Counter end={46} />
        </span>
        ,
        <span className='counter-num'>
          <Counter end={53} />
        </span>
        ,
        <span className='counter-num'>
          <Counter end={87} />
        </span>
        ,
        <span className='counter-num'>
          <Counter end={46} />
        </span>
      </span>
    </div>
  );
};
export default CountList;
