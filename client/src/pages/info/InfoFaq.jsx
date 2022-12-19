import { Layout, BreadCrumb } from "../../components";

import Questions from "./faq/Questions";
import Answers from "./faq/Answers";

const InfoFaq = () => {
  return (
    <Layout>
      <BreadCrumb
        title="faq"
        subtitle="All your Questions answered in one place.
"
        page="Frequently Asked Questions"
      />

      <div className=" bg-white m-0 pt-8 pb-0 mb-5">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div>
            <div className="text-green-800 border-b border-black mb-3">
              <h3>Some of your Questions:</h3>
            </div>
            <Questions />
            <Answers />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfoFaq;
