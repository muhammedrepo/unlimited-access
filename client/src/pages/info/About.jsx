import { BreadCrumb } from '../../components';
import EarnMore from './about/EarnMore';
import OverallProgress from './about/OverallProgress';
import TheStory from './about/TheStory';

const About = () => {
  return (
    <main className='pt-20 sm:pt-28'>
      <BreadCrumb
        title='About us'
        subtitle='Learn more about CloutZap.'
        page='About'
      />

      <section className='relative bg-white mt-16'>
        <div className='relative content-wrap py-0 overflow-visible'>
          <OverallProgress />

          <TheStory />
          <EarnMore />
        </div>
      </section>
    </main>
  );
};

export default About;
