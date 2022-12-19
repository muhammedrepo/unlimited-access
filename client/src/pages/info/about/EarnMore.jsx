import { earnMore } from "../../../utils/data";
import EarnMoreList from "./EarnMoreList";

const EarnMore = () => {
  return (
    <div className="bg-transparent p-2 mt-4">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="text-center">
          <div className="">
            <h2 className="mb-3 text-green-800 border-b border-green-800">
              How Much Can I Expect to Earn Using CloutZap?
            </h2>
            <p className="mb-3">
              Most of our members earns $10k+ a month using CloutZap. It's a fun
              side gig or you can also make it a full time thing too. You can
              easily make money when you have got some spare time. And of course
              there are plenty of power users who earn in the 4 or 5 figures
              every year using CloutZap.
            </p>

            <p>
              Every day, over ten's of thousands of dollars are paid out on
              CloutZap. Since launch, CloutZap has paid over $22,784,490 in
              cash. Put cash back in your wallet. Join for free today.
            </p>
          </div>

          <h4 className="pt-8">How can you earn more $$$ with CloutZap?</h4>

          <div className="grid md:grid-cols-3 gap-6">
            {earnMore.map((item) => (
              <EarnMoreList key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnMore;
