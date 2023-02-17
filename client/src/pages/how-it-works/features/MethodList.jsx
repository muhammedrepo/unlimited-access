import { methodsInfo } from '../../../utils/data';
import MethodItem from './MethodItem';

const MethodList = () => {
  const renderedMethod = methodsInfo.map((method) => (
    <MethodItem key={method.id} method={method} />
  ));

  return (
    <section className='bg-white m-0 pt-0 pb-0 mb-5'>
      <div className='px-4 mx-auto max-w-screen-xl py-14'>
        <div className='flex flex-col items-center max-w-3xl mx-auto g-0'>
          {renderedMethod}
        </div>
      </div>
    </section>
  );
};

export default MethodList;
