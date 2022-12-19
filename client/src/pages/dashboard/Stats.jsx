import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { GetFreeTraffic } from "../../components/dashboard";
import {
  BonusTab,
  LeaderBoard,
  ReferralLink,
  TasksReports,
  WaysToEarn,
} from "../../features/stats-feature";

const Stats = () => {
  return (
    <>
      <BonusTab />
      <section className="mt-12">
        <div className="grid md:grid-cols-2 gap-6">
          <ReferralLink />
          <div className="grid gap-2 h-24">
            <Button
              to="/task-wall"
              className="text-skin-base bg-skin-green-dark flex flex-col text-center items-center text-xl px-5 py-2.5"
            >
              <AiFillDollarCircle size="52px" />
              Earn $80+ Per Task
              <br />
              Start Making Money Now
            </Button>
          </div>
        </div>
      </section>
      <TasksReports />
      <section className="mt-14 w-full md:max-w-3xl mx-auto">
        <WaysToEarn />
      </section>
      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <GetFreeTraffic />
          <LeaderBoard />
        </div>
      </section>
    </>
  );
};

export default Stats;
