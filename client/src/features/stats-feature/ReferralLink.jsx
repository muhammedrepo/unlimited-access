import { FaFacebookMessenger, FaShareSquare } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import Button from "../../components/Button";
import CopyreferalLink from "../../components/CopyreferalLink";

import Card from "../../components/UI/Card";

const ReferralLink = () => {
  return (
    <Card>
      <div className="card">
        <div className="card-header ">
          <h5 className="flex gap-x-2 text-2xl">
            <FaShareSquare />
            Your Referral Link
          </h5>
        </div>
        <div className="card-body">
          <CopyreferalLink />

          <p>
            <FiShare className="text-md mr-1 text-skin-fill inline-flex" />
            <span>
              Share this link and <b>earn $2</b> for every person who clicks on
              it. <b>Earn an additional $15</b> when they sign up!
            </span>
          </p>

          <div className="mt-2 mb-3 grid">
            <Button
              url="/referrals"
              className="bg-skin-green-dark text-skin-base"
            >
              <FaShareSquare className="mr-2" /> Refer &amp; Earn
            </Button>
          </div>
          <p>
            <FaFacebookMessenger className="text-md mr-1 text-skin-black inline-flex" />
            Use this link to share on Facebook, Instagram, Snapchat and Twitter!
            <strong>
              {" "}
              You also gain 15% of all money earned by your referrals! Make sure
              anyone you refer is making money so you can make more!
            </strong>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ReferralLink;
