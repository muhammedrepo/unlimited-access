import Card from "../UI/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

import { newreferral } from "../../utils/data";

const YourReferrals = () => {
  return (
    <Card>
      <div className="card-header">
        <h5 className="text-2xl">Your Referrals</h5>
      </div>
      <div className="card-body">
        <ul className="divide-x divide-gray-200">
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
            {newreferral.map((item) => {
              const { id, avatar, username, earnings, joined } = item;

              return (
                <SwiperSlide>
                  <li key={id} className="py-3 sm:py-4">
                    <div className="flex flex-col items-center justify-center border p-1 w-full">
                      <div className=" mb-6">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={avatar}
                          alt="Neil"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white mb-3">
                          {username}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          Joined: {joined}
                        </p>
                      </div>
                      <div className="text-base font-semibold text-gray-900 ">
                        {earnings}
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ul>
      </div>
    </Card>
  );
};

export default YourReferrals;
