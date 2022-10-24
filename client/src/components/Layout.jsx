import { Navbar, Footer, CTA } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
