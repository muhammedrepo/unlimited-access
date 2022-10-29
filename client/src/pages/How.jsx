import React from "react";
import { FaCommentDollar, FaMoneyBillWave, FaSignInAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import { BreadCrumb, Button, Layout } from "../components";
import Counter from "../components/Counter";

const Wrapper = styled.div`
  .counter-num {
    background-color: #1b4c43;
    margin: 0 3px;
    display: inline-block;
    padding: 4px 10px 0;
    min-width: 50px;
    color: #fff;
    line-height: 1.3;
    border-radius: 4px;
  }
`;

const How = () => {
  return (
    <Layout>
      <Wrapper>
        <BreadCrumb
          title="HOW CLOUTZAP WORKS"
          subtitle="Its very easy to get started with CloutZap."
          page="How It Works"
        />

        <section className="px-4 mx-auto max-w-screen-xl pt-4 pb-0 mb-5">
          <div className="text-center">
            <h3>Learn How To Earn Money with CloutZap!</h3>
            <p className="mb-0">Users like you have already received</p>
            <div className="flex items-center justify-center my-2 text-4xl font-semibold">
              <span className="counter-num">$</span>
              <span className="flex counter-text mr-2">
                <span className="counter-num">
                  <Counter end={46} />
                </span>
                ,
                <span className="counter-num">
                  <Counter end={53} />
                </span>
                ,
                <span className="counter-num">
                  <Counter end={87} />
                </span>
                ,
                <span className="counter-num">
                  <Counter end={46} />
                </span>
              </span>
            </div>
            <p className="mb-0">in Cash by CloutZap.</p>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
            <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                How it Works
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Easiest #1 Influencer Network in the world. Easy as 1,2,3 all
                you have to do is Join, Share, and Earn.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="text-center flex flex-col items-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
                  <FaSignInAlt className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 text-5xl font-bold dark:text-green-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Join CloutZap
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We reward our members with money for the everyday things they
                  already do online.
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
                  <FaCommentDollar className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 dark:text-green-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Earn Money
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Invite your friends to our site by sharing your referral link
                  and earn $15 for every person you invite.
                </p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
                  <FaMoneyBillWave className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 dark:text-green-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Get Paid
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Instantly withdraw your funds to PayPal, Cash App, Venmo,
                  Zelle, and more!
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button
                text="Sign up now for $35 bonus!"
                bgColor="green"
                url="/register"
              />
            </div>
          </div>
        </section>

        <section className="bg-white m-0 pt-0 pb-0 mb-5">
          <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex flex-col items-center mw-sm mx-auto g-0">
              <div className="col-12">
                <div className="flex flex-wrap">
                  <div className="w-40 h-36 px-3 mr-4">
                    <img
                      src="https://cloutzap.com/images/referral.png"
                      alt="Feature Icon"
                      className="bg-transparent rounded-0"
                    />
                  </div>
                  <div className="fbox-content px-3">
                    <h3>Clicks &amp; Referrals</h3>
                    <p>
                      Share your invite link with friends, family, and
                      colleagues and receive $2 when they click it, and $15 for
                      every sign up.
                    </p>
                    <Button
                      text="Start Earning Now"
                      url="/register"
                      bgColor="green"
                      icon=<FiArrowRight />
                    />
                  </div>
                </div>
              </div>

              <div className="line my-5"></div>
              <div className="col-12">
                <div className="flex flex-wrap fbox-xl flex-row-reverse">
                  <div className="w-40 h-36 px-3 ms-3">
                    <img
                      src="https://cloutzap.com/images/survey.png"
                      alt="Feature Icon"
                      className="bg-transparent rounded-0"
                    />
                  </div>
                  <div className="fbox-content">
                    <h3>Survey Tasks</h3>
                    <p>Earn Money when you answer fun surveys and polls.</p>
                    <Button
                      text="Start Earning Now"
                      url="/register"
                      bgColor="green"
                      icon=<FiArrowRight />
                    />
                  </div>
                </div>
              </div>

              <div className="line my-5"></div>
              <div className="col-12">
                <div className="flex flex-wrap">
                  <div className="w-40 h-36 px-3 ms-3">
                    <img
                      src="https://cloutzap.com/images/mobile.png"
                      alt="Feature Icon"
                      className="bg-transparent rounded-0"
                    />
                  </div>
                  <div className="fbox-content">
                    <h3>App Tasks</h3>
                    <p>
                      Earn Money for playing games and testing some free apps.
                    </p>
                    <Button
                      text="Start Earning Now"
                      url="/register"
                      bgColor="green"
                      icon=<FiArrowRight />
                    />
                  </div>
                </div>
              </div>

              <div className="line my-5"></div>
              <div className="col-12">
                <div className="flex flex-wrap fbox-xl flex-row-reverse">
                  <div className="w-40 h-36 px-3 mr-4">
                    <img
                      src="https://cloutzap.com/images/quest.png"
                      alt="Feature Icon"
                      className="bg-transparent rounded-0"
                    />
                  </div>
                  <div className="fbox-content">
                    <h3>Daily Quest</h3>
                    <p>
                      Complete Daily Quests on our site and redeem Money for
                      every completed quest.
                    </p>
                    <Button
                      text="Start Earning Now"
                      url="/register"
                      bgColor="green"
                      icon=<FiArrowRight />
                    />
                  </div>
                </div>
              </div>

              <div className="line my-5"></div>
              <div className="col-12">
                <div className="flex flex-wrap">
                  <div className="w-40 h-36 px-3 mr-4">
                    <img
                      src="https://cloutzap.com/images/trophy.png"
                      alt="Feature Icon"
                      className="bg-transparent rounded-0"
                    />
                  </div>
                  <div className="fbox-content">
                    <h3>Giveaway</h3>
                    <p>
                      Enter the hourly giveaway to earn the money. The entry is
                      free. All you have to do is join.
                    </p>
                    <Button
                      text="Start Earning Now"
                      url="/register"
                      bgColor="green"
                      icon=<FiArrowRight />
                    />
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

export default How;
