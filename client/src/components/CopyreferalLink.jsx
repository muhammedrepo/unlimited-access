import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import Button from "./Button";

import FormRow from "./FormRow";

const refferal = "https://send.cloutzap.com/coolzyte";

const CopyreferalLink = () => {
  const [copyLink, setCopyLink] = useState(refferal);
  const [toggle, setToggle] = useState(false);

  const inputHandler = (e) => {
    setCopyLink(e.target.value);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(copyLink);
    setToggle(!toggle);
  };
  return (
    <>
      <FormRow
        type="text"
        value={copyLink}
        handleChange={inputHandler}
        disabled
      />

      <div className="mt-2 mb-3 grid text-center">
        <Button className="text-skin-base bg-skin-button-brown" onClick={copy}>
          <FaCopy className="mr-2" />{" "}
          {toggle ? "Referral Link copied" : "Copy Link"}
        </Button>
      </div>
    </>
  );
};

export default CopyreferalLink;
