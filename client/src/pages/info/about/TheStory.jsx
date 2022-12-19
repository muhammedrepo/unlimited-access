import React from "react";
import { Card, CardHeader } from "../../../components/UI";

const TheStory = () => {
  return (
    <section>
      <div className=" bg-gray-50 m-0 pt-3 pb-0">
        <div className="container mx-auto max-w-5xl">
          <div
            className="heading-block border-b-0 text-center mx-auto"
            style={{ maxWidth: "550px" }}
          >
            <div className="badge rounded-pill badge-default">The Story</div>
            <CardHeader
              title="The Story of CloutZap"
              subtitle="How we got on our feet to become the #1 Influencer Earning
              Network."
            />
          </div>
          <Card>
            <img
              src="https://cloutzap.com/images/about_cloutzap.jpg"
              className="cloutzap-about-image"
              alt="..."
            />
            <div className="card-body p-4 text-center">
              <CardHeader
                title="Who Are We?"
                subtitle=" When you join CloutZap, you join a community of millions of
                people who choose to share their opinions and complete offers in
                exchange for payment. Every day, hundreds of brands you love
                turn to CloutZap for consumer insights, and the information
                shared by the CZ community powers that research."
              />
            </div>
          </Card>
          <div className="flex team team-list rounded-5 g-0 items-center shadow-sm border h-shadow h-translatey-sm all-ts rounded-4 overflow-hidden mt-5 mb-5">
            <div className="col-md-4 team-image col-sm-5 d-flex align-self-stretch">
              <img
                src="https://cloutzap.com/images/earn_with_cloutzap.jpg"
                alt="earn_with_clout_zap"
              />
            </div>
            <div className="p-4">
              <div className="text-start">
                <h4 className="pt-0 mb-3">
                  We have everything you need to convert your phone into a
                  source of income.
                </h4>
                <p className="mb-3">
                  CloutZap is an online community with over 1M+ members
                  dedicated to making their voices heard by completing surveys
                  and special tasks. We open the window of communication between
                  you and the brands you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStory;
