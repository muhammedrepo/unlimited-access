import React from "react";
import { FaGift, FaUserPlus } from "react-icons/fa";
import { GetFreeTraffic, YourReferrals } from "../../components/dashboard";
import Breadcrumb from "../../components/dashboard/Breadcrumb";
import TasksButton from "../../components/dashboard/TasksButton";
import { Timeline } from "../../features/referrals-feature";

const Referrals = () => {
  return (
    <div>
      <Breadcrumb title="Refer Section" page="Refer & Earn" />
      <section className="mt-14">
        <div className="lg:max-w-xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <TasksButton icon=<FaUserPlus /> title="Referrals" number="16" />
            <TasksButton
              icon=<FaGift />
              title="Referral Bonus (15% COMMISSION)"
              number="$68"
            />
          </div>
        </div>
      </section>
      <section className="mt-14">
        <Timeline />
      </section>
      <section className="mt-14">
        <div className="grid lg:grid-cols-2 gap-6">
          <GetFreeTraffic />
          <YourReferrals />
        </div>
      </section>
    </div>
  );
};

export default Referrals;
