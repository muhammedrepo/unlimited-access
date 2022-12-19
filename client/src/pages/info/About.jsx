import { BreadCrumb, Layout } from "../../components";
import EarnMore from "./about/EarnMore";
import OverallProgress from "./about/OverallProgress";
import TheStory from "./about/TheStory";

const About = () => {
  return (
    <Layout>
      <BreadCrumb
        title="About us"
        subtitle="Learn more about CloutZap."
        page="About"
      />

      <section className="relative bg-white">
        <div class="relative content-wrap py-0 overflow-visible">
          <OverallProgress />
          <TheStory />
          <EarnMore />
        </div>
      </section>
    </Layout>
  );
};

export default About;
