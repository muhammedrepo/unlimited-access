import styled from "styled-components";
import { BreadCrumb, Layout } from "../components";
import Counter from "../components/Counter";
import { HowSteps, Methods } from "../components/how-it-works";

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
        <section className="bg-gray-50">
          <HowSteps />
        </section>
        <section className="bg-white m-0 pt-0 pb-0 mb-5">
          <Methods />
        </section>
      </Wrapper>
    </Layout>
  );
};

export default How;
