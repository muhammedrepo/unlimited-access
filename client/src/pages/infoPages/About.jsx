import React from "react";
import styled from "styled-components";
import { BreadCrumb, Button, Layout } from "../../components";
import { earnMore } from "../../utils/data";

const Wrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .card-seo-about {
    transform: translateY(-20%);
  }
  .card-body {
    flex: 1 1 auto;
  }
`;

const About = () => {
  return (
    <Layout>
      <BreadCrumb
        title="About us"
        subtitle="Learn more about CloutZap."
        page="About"
      />
      <Wrapper>
        <section className="relative bg-white">
          <div class="relative content-wrap py-0 overflow-visible">
            <div className="card mx-auto max-w-5xl border-0 shadow rounded-4 card-seo-about mb-5 lg:mb-0">
              <div className="card-body p-5">
                <div className="flex items-center">
                  <div className="col-md-6">
                    <div className="heading-block border-bottom-0 mb-0">
                      <div className="badge rounded-pill badge-default">
                        #1 Clout Network
                      </div>
                      <h3 className="nott ls0 mb-3">
                        CloutZap | The #1 Influencer Network
                      </h3>
                      <p className="mb-2">
                        CloutZap has caused an uproar on all social media! Our
                        affiliates are being paid to share their special
                        referral link. Did we really become the #1 Influencer
                        Network in this short time? YES, we’re that good.
                        Influencers enjoy our transparency, our flexibility, and
                        our high payouts! With us, any social media user with
                        any size following can become a successful influencer.
                      </p>
                      <Button
                        text="Get started now"
                        url="/register"
                        bgColor="green"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className=""></div>
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className=""></div>
                      </div>
                    </div>
                    <p className="text-end text-muted text-smaller">
                      Overall Progress:{" "}
                      <span className="text-green-700 font-bold text-larger">
                        +200%
                      </span>
                    </p>
                    <canvas
                      id="chart-0"
                      style={{
                        display: "block",
                        height: "226px",
                        width: "452px",
                      }}
                      width="904"
                      height="452"
                      className="chartjs-render-monitor"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-gray-50 m-0 pt-3 pb-0">
              <div className="container mx-auto max-w-5xl">
                <div
                  className="heading-block border-b-0 text-center mx-auto"
                  style={{ maxWidth: "550px" }}
                >
                  <div className="badge rounded-pill badge-default">
                    The Story
                  </div>
                  <h3 className="nott ls0 mb-3">The Story of CloutZap</h3>
                  <p className="mb-0">
                    How we got on our feet to become the #1 Influencer Earning
                    Network.
                  </p>
                </div>
                <div className="card">
                  <img
                    src="https://cloutzap.com/images/about_cloutzap.jpg"
                    className="cloutzap-about-image"
                    alt="..."
                  />
                  <div className="card-body p-4 text-center">
                    <h4 className="card-title mb-1">Who Are We?</h4>
                    <p className="card-text">
                      When you join CloutZap, you join a community of millions
                      of people who choose to share their opinions and complete
                      offers in exchange for payment. Every day, hundreds of
                      brands you love turn to CloutZap for consumer insights,
                      and the information shared by the CZ community powers that
                      research.
                    </p>
                  </div>
                </div>
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
                        dedicated to making their voices heard by completing
                        surveys and special tasks. We open the window of
                        communication between you and the brands you love.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent p-2 mt-4">
              <div className="px-4 mx-auto max-w-screen-xl">
                <div className="text-center">
                  <div className="">
                    <h2 className="mb-3 text-green-800 border-b border-green-800">
                      How Much Can I Expect to Earn Using CloutZap?
                    </h2>
                    <p className="mb-3">
                      Most of our members earns $10k+ a month using CloutZap.
                      It's a fun side gig or you can also make it a full time
                      thing too. You can easily make money when you have got
                      some spare time. And of course there are plenty of power
                      users who earn in the 4 or 5 figures every year using
                      CloutZap.
                    </p>

                    <p>
                      Every day, over ten's of thousands of dollars are paid out
                      on CloutZap. Since launch, CloutZap has paid over
                      $22,784,490 in cash. Put cash back in your wallet. Join
                      for free today.
                    </p>
                  </div>

                  <h4 className="pt-8">
                    How can you earn more $$$ with CloutZap?
                  </h4>

                  <div className="grid md:grid-cols-3 gap-6">
                    {earnMore.map((item) => {
                      const { id, title, subtitle, icon } = item;

                      return (
                        <div key={id} className=" lg:mb-3">
                          <div class="flex flex-wrap p-3 rounded-lg lg:p-5">
                            <div className="flex flex-col items-center justify-center text-white">
                              <div className="flex justify-center items-center text-white text-4xl mb-4 w-10 h-10 rounded-full bg-green-800 lg:h-28 lg:w-28">
                                {icon}
                              </div>
                              <h3 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl uppercase">
                                {title}
                              </h3>
                              <span className="mb-3 text-gray-500 ">
                                {subtitle}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
};

export default About;
