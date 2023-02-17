import {
  aus,
  brazil,
  can,
  india,
  jap,
  sing,
  sout,
  uk,
  usa,
} from '../../../assets';
import map from '../../../assets/map.png';
import MapCounter from './MapCounter';

const MapSection = () => {
  return (
    <section className='mt-32 lg:mt-20'>
      <figure className='relative'>
        <img src={map} alt='map' className='w-full h-auto opacity-60' />

        <figcaption className='map-title px-4 max-w-3xl'>
          <h3 className='capitalize text-center text-base lg:text-2xl'>
            Our Members are from Around The World. Some of our Most Popular
            Countries.
          </h3>
          <div className='flex justify-center'>
            <ul className='map pr-12'>
              <li>
                <img src={usa} alt='usa' />
                <span>USA</span>
              </li>
              <li>
                <img src={uk} alt='uk' />
                <span>United Kingdom</span>
              </li>
              <li>
                <img src={can} alt='canada' />
                <span>Canada</span>
              </li>
              <li>
                <img src={aus} alt='Australia' />
                <span>Australia</span>
              </li>
              <li>
                <img src={india} alt='india' />
                <span>India</span>
              </li>
            </ul>
            <ul className='map pl-12'>
              <li>
                <img src={sing} alt='singapore' />
                <span>Singapore</span>
              </li>
              <li>
                <img src={jap} alt='japan' />
                <span>Japan</span>
              </li>
              <li>
                <img src={sout} alt='south africa' />
                <span>South Africa</span>
              </li>
              <li>
                <img src={brazil} alt='brazil' />
                <span>Brazil</span>
              </li>
              <li>
                <span>and many more...</span>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
      <MapCounter />
    </section>
  );
};

export default MapSection;
