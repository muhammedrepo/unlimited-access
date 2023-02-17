import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';

import {
  Home,
  Error,
  Register,
  Testimonials,
  ProtectedRoute,
  HowItWorks,
  PaymentProofsPage,
} from './pages';

import {
  SharedLayout,
  DailyQuests,
  Stats,
  Faq,
  GiveAway,
  MyAccount,
  Referrals,
  SocialPosts,
  TaskWall,
  Withdraw,
  WithdrawHistory,
  ReferralsGuide,
  Promo,
} from './pages/dashboard';

import { About, Fraud, Terms, Privacy, InfoFaq } from './pages/info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='referrals' element={<Referrals />} />
          <Route path='referrals-guide' element={<ReferralsGuide />} />
          <Route path='promo' element={<Promo />} />
          <Route path='task-wall' element={<TaskWall />} />
          <Route path='social-posts' element={<SocialPosts />} />
          <Route path='daily-quests' element={<DailyQuests />} />
          <Route path='giveaway' element={<GiveAway />} />
          <Route path='withdraw' element={<Withdraw />} />
          <Route path='withdraw-history' element={<WithdrawHistory />} />
          <Route path='settings' element={<MyAccount />} />
          <Route path='faq' element={<Faq />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Layout />}>
          <Route path='/landing' element={<Home />} />
          <Route path='/how' element={<HowItWorks />} />
          <Route path='/proofs' element={<PaymentProofsPage />} />
          <Route path='/review' element={<Testimonials />} />
          <Route path='about-us' element={<About />} />
          <Route path='info-faq' element={<InfoFaq />} />
          <Route path='fraud-policy' element={<Fraud />} />
          <Route path='terms-conditions' element={<Terms />} />
          <Route path='privacy-policy' element={<Privacy />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
