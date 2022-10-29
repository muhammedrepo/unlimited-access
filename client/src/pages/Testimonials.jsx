import React from "react";
import { FaYoutube } from "react-icons/fa";
import { BreadCrumb, Button, Layout } from "../components";

const testVid = [
  {
    id: 1,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 2,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 3,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 4,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 5,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 6,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 7,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 8,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      <BreadCrumb
        title="CLOUTZAP REVIEW
"
        subtitle="As the community grows and members become more involved, your impact amplifies. Within the last three years, CloutZap community members have completed over 500,000 surveys, 3M+ Downloads, and 300M Clicks, and those numbers continue to grow. Below are testimonials from our happy Members, Learn what they have to say about CloutZap."
        page="Reviews"
      />
      <section>
        <div className="px-4 mx-auto max-w-screen-xl my-8">
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="h1 font-bold mb-4">
                What Our Members Have To Say !
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testVid.map((video) => {
              return (
                <div
                  key={video.id}
                  className="w-full"
                  // style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    src={video.vid}
                    title="CloutZap Welcome Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container mt-4 mt-lg-4 text-center">
          <Button
            icon=<FaYoutube />
            text="Watch More Review On YouTube"
            url="/"
            bgColor="red"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
