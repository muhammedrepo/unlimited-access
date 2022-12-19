import { Footer, CTA } from ".";
import Navbar from "../parts/Header/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28">{children}</main>
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
