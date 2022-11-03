import { FaGift, FaUsers } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button, CopyreferalLink } from "../../components";
import {
  Breadcrumb,
  SocialMediaGuide,
  TasksButton,
} from "../../components/dashboard";
import Card from "../../components/UI/Card";
import { socialguides } from "../../utils/data";

const ReferralsGuide = () => {
  return (
    <div>
      <Breadcrumb title="Referrals Guide" page="Guide to get more referrals" />

      <section className="mt-14">
        <div className="grid lg:grid-cols-2 gap-6">
          {socialguides.map((guide) => {
            return <SocialMediaGuide key={guide.id} {...guide} />;
          })}
        </div>
      </section>

      <section className="max-w-2xl mx-auto mt-14">
        <Card>
          <div class="card-header pb-0">
            <h5>Hi Tunde Tijani,</h5>
            <p class="mb-0">
              Below are your referral stats so far.{" "}
              <b>
                On average, our users TRIPLE their earnings after using the{" "}
                <Link to="/referrals" target="_blank">
                  Refer &amp; Earn Section
                </Link>
                .
              </b>
            </p>
          </div>
          <div class="card-body">
            <div class="grid grid-cols-2 gap-6">
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
            <hr class="mb-2" />
            <h6 class="mb-2 font-bold text-xl">YOUR REFERRAL LINK</h6>
            <CopyreferalLink />
            <p>
              You can share your link with your friends, family, and followers
              on social media OR share via text-message or WhatsApp.
            </p>
            <div class="mt-2 mb-3 grid">
              <Button
                icon=<FaUsers />
                text="Check Your Referrals"
                bgColor="green"
                url="/referrals"
              />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default ReferralsGuide;
