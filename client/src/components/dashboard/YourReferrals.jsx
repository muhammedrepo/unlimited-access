import Card from "../UI/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { referrals } from "../../utils/data";
import { CardHeader } from "../UI";

const YourReferrals = () => {
  const renderedReferrals = referrals.map((referral) => {
    const { id, avatar, username, earnings, joined } = referral;

    return (
      <SwiperSlide key={id}>
        <li className="py-3 sm:py-4">
          <div className="flex flex-col items-center justify-center border p-1 w-full">
            <div className=" mb-6">
              <img className="w-10 h-10 rounded-full" src={avatar} alt="Neil" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 truncate mb-3">
                {username}
              </p>
              <p className="text-xs text-gray-500 mb-3">Joined: {joined}</p>
            </div>
            <div className="text-base font-semibold text-gray-900 ">
              {earnings}
            </div>
          </div>
        </li>
      </SwiperSlide>
    );
  });

  return (
    <Card>
      <CardHeader title="Your Referrals" />

      <ul className="divide-x divide-gray-200 card-body">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {renderedReferrals}
        </Swiper>
      </ul>
    </Card>
  );
};

export default YourReferrals;
