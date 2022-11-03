import { FaFacebookMessenger, FaShareSquare } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import Button from "../Button";
import CopyreferalLink from "../CopyreferalLink";

import Card from "../UI/Card";

const ReferralLink = () => {
  return (
    <Card>
      <div class="card">
        <div class="card-header ">
          <h5 className="flex gap-x-2 text-2xl">
            <FaShareSquare />
            Your Referral Link
          </h5>
        </div>
        <div className="card-body">
          <CopyreferalLink />
          <p className="">
            <FiShare size="20px" />
            Share this link and <b>earn $2</b> for every person who clicks on
            it. <b>Earn an additional $15</b> when they sign up!
          </p>
          <div class="mt-2 mb-3 grid">
            <Button
              icon=<FaShareSquare />
              text="Refer &amp; Earn"
              bgColor="green"
              url="/referrals"
            />
          </div>
          <p>
            <FaFacebookMessenger /> Use this link to share on Facebook,
            Instagram, Snapchat and Twitter!
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
