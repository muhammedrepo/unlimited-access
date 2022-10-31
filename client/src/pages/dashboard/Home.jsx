import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import {
  FaDollarSign,
  FaLocationArrow,
  FaShareSquare,
  FaTasks,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import {
  BonusTab,
  GetFreeTraffic,
  LeaderBoard,
  ReferralLink,
  TasksButton,
  WaysToEarn,
} from "../../components/dashboard";

const Wrapper = styled.section`
  .btn-earn {
    ${tw`text-white bg-green-600 hover:bg-green-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-md flex flex-col text-center items-center text-xl px-5 py-2.5`}
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <BonusTab />
      <section className="mb-4">
        <div className="grid md:grid-cols-2 gap-6">
          <ReferralLink />
          <div className="grid gap-2 h-24">
            <Link to="/task-wall" className="btn-earn">
              <AiFillDollarCircle size="52px" />
              Earn $80+ Per Task
              <br />
              Start Making Money Now
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <TasksButton icon=<FaDollarSign /> title="Earnings" number="$2,541" />
          <TasksButton icon=<FaLocationArrow /> title="Clicks" number="60" />
          <TasksButton
            icon=<BsPersonPlus />
            title="Referrals & 15% COMMISSION"
            number="16 ($68)"
          />
          <TasksButton icon=<FaTasks /> title="Tasks" number="7" />
          <TasksButton icon=<FaShareSquare /> title="Posts" number="4" />
        </div>
      </section>
      <section className="mt-14 w-full md:max-w-3xl mx-auto">
        <WaysToEarn />
      </section>
      <section className="mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          <GetFreeTraffic />
          <LeaderBoard />
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
