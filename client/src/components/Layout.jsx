import { Navbar, Footer, CTA } from ".";

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
