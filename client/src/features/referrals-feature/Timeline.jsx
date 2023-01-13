import Card from "../../components/UI/Card";
import { BiInfoCircle } from "react-icons/bi";
import { CopyreferalLink } from "../../components";
import { CardHeader } from "../../components/UI";

const Timeline = () => {
  return (
    <Card>
      <CardHeader title="Refer &amp; Earn in 2 Simple Steps" />
      <section className="relative">
        <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-gray-300 lg:block left-1/2"></div>
        <div className="space-y-12 lg:space-y-8">
          <div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className=" w-full lg:w-1/2 lg:pr-8">
                  <div className="cd-timeline-content relative bg-gray-100 rounded-md p-7 border border-gray-200">
                    <h6 className="mb-2 fw-bolder">Refer &amp; Earn</h6>
                    <p className="m-0 text-gray-500 pt-2">
                      Share your referral link with your friends to earn. Earn{" "}
                      <b>$2</b> for every friend who clicks your link and{" "}
                      <b>$15 for every friend that signs up</b>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-400 border-2 border-green-200 rounded-full left-1/2 sm:translate-y-0">
                <span className="text-white">1</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-end w-full mx-auto">
                <div className="w-full lg:w-1/2 lg:pl-8">
                  <div className="cd-timeline-content relative bg-gray-100 rounded-md p-7 border border-gray-200">
                    <span className="cd-date">
                      You also gain 15% of all money earned by your referrals!
                      Make sure anyone you refer is making money so you can make
                      more!
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-400 border-2 border-green-200 rounded-full left-1/2 sm:translate-y-0">
                <span className="text-white">2</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-start w-full mx-auto">
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <div className="cd-timeline-content relative bg-gray-100 rounded-md p-7 border border-gray-200">
                    <h6 className="mb-2 fw-bolder">YOUR REFERRAL LINK</h6>
                    <CopyreferalLink />
                    <span>
                      <BiInfoCircle className="inline-flex text-xl" /> Use this
                      link to share on Facebook, Instagram, Snapchat, Twitter
                      and other social media platforms!
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-400 border-2 border-green-200 rounded-full left-1/2 sm:translate-y-0">
                <span className="text-white">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default Timeline;
