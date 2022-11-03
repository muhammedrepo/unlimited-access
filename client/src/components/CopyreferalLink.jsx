import React from "react";
import { FaCopy } from "react-icons/fa";
import Button from "./Button";

import FormRow from "./FormRow";

const CopyreferalLink = () => {
  return (
    <>
      <FormRow
        type="text"
        value="https://send.cloutzap.com/coolzyte"
        readonly=""
      />

      <div className="mt-2 mb-3 grid text-center">
        <Button icon=<FaCopy /> text="Copy Link" bgColor="red" />
      </div>
    </>
  );
};

export default CopyreferalLink;
