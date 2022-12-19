import { Layout, Proofs } from "../../components";
import {
  Hero,
  HowCanYouEarn,
  StartMakingMoney,
  EarnDevice,
  MapSection,
} from "./features";

const Home = () => {
  return (
    <Layout>
      <section className="py-4 lg:pt-12 lg:pb-16">
        <Hero />
      </section>
      <section className="py-8 bg-green-600 text-white">
        <HowCanYouEarn />
      </section>
      <section className="py-14">
        <StartMakingMoney />
      </section>
      <section className="py-14 bg-gray-50">
        <Proofs />
      </section>
      <section className="mt-32 lg:mt-20">
        <MapSection />
      </section>
      <section className="mt-20">
        <EarnDevice />
      </section>
    </Layout>
  );
};

export default Home;
