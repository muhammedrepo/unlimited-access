import React from "react";
import { BreadCrumb, Layout, PaymentProofs } from "../components";

const Proofs = () => {
  return (
    <Layout>
      <BreadCrumb
        title="PAYMENT PROOFS"
        subtitle="Here are some proofs of payment."
        page="Proofs"
      />
      <div className="mx-auto max-w-screen-xl px-4">
        <p class="text-center mb-5">
          Does CloutZap seem too good to be true? Here are some proofs of
          payment. With over $22,670,000+ paid to over 560,000+ members,
          CloutZap has quickly become the #1 influencer earning network. With
          such a track record, CloutZap has a lot of happy members. Our users
          are killing it! Cashing out and getting paid daily!{" "}
        </p>
        <div className="mt-8">
          <PaymentProofs />
        </div>
      </div>
    </Layout>
  );
};

export default Proofs;
