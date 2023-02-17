import { FaYoutube } from 'react-icons/fa';
import { BreadCrumb, Button } from '../../components';
import { testimonialVideo } from '../../utils/data';

const Testimonials = () => {
  const renderedVideos = testimonialVideo.map((video) => {
    return (
      <div key={video.id} className='w-full'>
        <iframe
          src={video.vid}
          title='CloutZap Welcome Video'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </div>
    );
  });

  return (
    <main className='pt-20 sm:pt-28'>
      <BreadCrumb
        title='CLOUTZAP REVIEW'
        subtitle='As the community grows and members become more involved, your impact amplifies. Within the last three years, CloutZap community members have completed over 500,000 surveys, 3M+ Downloads, and 300M Clicks, and those numbers continue to grow. Below are testimonials from our happy Members, Learn what they have to say about CloutZap.'
        page='Reviews'
      />
      <section className='py-16'>
        <div className='px-4 mx-auto max-w-screen-xl my-8'>
          <div className='flex justify-center'>
            <div className='text-center'>
              <h3 className='h1 font-bold mb-4'>
                What Our Members Have To Say !
              </h3>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {renderedVideos}
          </div>
        </div>
        <div className='container mt-4 mt-lg-4 text-center'>
          <Button url='/' className='bg-skin-red-dark text-skin-base'>
            <FaYoutube /> Watch More Review On Youtube
          </Button>
        </div>
        <div className='container flex justify-center py-16'>
          <Button
            url='/register'
            className='bg-skin-button-green text-skin-base text-center flex flex-col'
          >
            <span className='text-2xl m-0'>Sign Up Now </span>
            <span className='capitalize font-normal italic'>
              Sign up now for $35 Bonus!
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
