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
    <div className="flex flex-col gap-y-4">
      <FormRow
        type="text"
        value={copyLink}
        handleChange={inputHandler}
        disabled
      />

      <Button btnCopy onClick={copy}>
        <FaCopy className="mr-2" />{" "}
        {toggle ? "Referral Link copied" : "Copy Link"}
      </Button>
    </div>
  );
};

export default CopyreferalLink;
