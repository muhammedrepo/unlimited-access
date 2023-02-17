import { PaymentProofs } from '../../components/payment-proof';
import {
  Hero,
  HowCanYouEarn,
  StartMakingMoney,
  EarnDevice,
  MapSection,
} from './features';

const Home = () => {
  return (
    <main className='pt-40'>
      <Hero />
      <HowCanYouEarn />
      <StartMakingMoney />
      <PaymentProofs />
      <MapSection />
      <EarnDevice />
    </main>
  );
};

export default Home;
