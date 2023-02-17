import CountUp from 'react-countup';

export default function Counter({ end }) {
  return (
    <div className='App'>
      <div className='content' />
      <CountUp end={end} enableScrollSpy />
    </div>
  );
}
