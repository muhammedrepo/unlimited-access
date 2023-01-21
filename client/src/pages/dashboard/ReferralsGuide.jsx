import { FaGift, FaUsers } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

import { Button, CopyreferalLink } from "../../components";
import {
  Breadcrumb,
  SocialMediaGuide,
  TasksButton,
} from "../../components/dashboard";
import { CardHeader } from "../../components/UI";
import Card from "../../components/UI/Card";
import { socialGuides } from "../../utils/data";

const ReferralsGuide = () => {
  const renderedGuides = socialGuides.map((guide) => {
    return <SocialMediaGuide key={guide.id} {...guide} />;
  });
  return (
    <div>
      <Breadcrumb title="Referrals Guide" page="Guide to get more referrals" />

      <section className="mt-14">
        <div className="grid lg:grid-cols-2 gap-6">{renderedGuides}</div>
      </section>

      <section className="max-w-2xl mx-auto mt-14">
        <Card>
          <CardHeader
            title="Hi Tunde Tijani,"
            subtitle="Below are your referral stats so far. On average, our users TRIPLE their earnings after using the Refer &amp; Earn Section"
          />

          <div className="card-body flex flex-col">
            <div className="grid grid-cols-2 gap-6">
              <TasksButton
                icon=<FiUserPlus />
                title="Your Referrals"
                number="16"
              />
              <TasksButton
                icon=<FaGift />
                title="Referral Bonus(15% COMMISSION)"
                number="$68"
              />
            </div>
            <hr className="mb-2" />
            <h6 className="mb-2 font-bold text-xl">YOUR REFERRAL LINK</h6>
            <CopyreferalLink />
            <p className="my-2">
              You can share your link with your friends, family, and followers
              on social media OR share via text-message or WhatsApp.
            </p>

            <Button btnDark url="/referrals">
              <FaUsers className="mr-2" />
              Check Your Referrals
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default ReferralsGuide;
