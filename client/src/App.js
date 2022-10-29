import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Error,
  Landing,
  How,
  Proofs,
  Register,
  Testimonials,
  ProtectedRoute,
} from "./pages";

import {
  SharedLayout,
  DailyQuests,
  Home,
  Faq,
  GiveAway,
  MyAccount,
  Referrals,
  SocialPosts,
  TaskWall,
  Withdraw,
  WithdrawHistory,
} from "./pages/dashboard";
import { About, Fraud, Terms, Privacy, InfoFaq } from "./pages/infoPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="referrals" element={<Referrals />} />
          <Route path="task-wall" element={<TaskWall />} />
          <Route path="social-posts" element={<SocialPosts />} />
          <Route path="daily-quests" element={<DailyQuests />} />
          <Route path="giveaway" element={<GiveAway />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="withdraw-history" element={<WithdrawHistory />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/how" element={<How />} />
        <Route path="/proofs" element={<Proofs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="about-us" element={<About />} />
        <Route path="info-faq" element={<InfoFaq />} />
        <Route path="fraud-policy" element={<Fraud />} />
        <Route path="terms-conditions" element={<Terms />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
