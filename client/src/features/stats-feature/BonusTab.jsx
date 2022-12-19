import Card from "../../components/UI/Card";
import { BsCheckAll } from "react-icons/bs";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import { useState } from "react";

const BonusTab = () => {
  const [showTab, setShowTab] = useState(false);

  return (
    <div>
      <div className="mx-auto sm:w-2/5">
        <div className="grid gap-2">
          <Button
            className="text-skin-base bg-skin-green-dark flex flex-col"
            onClick={() => setShowTab(!showTab)}
          >
            <span>💰 🥳 $4000 Exclusive Bonus 🥳</span>
            <span>👉🏻 Tap Here For More Info 👈🏻</span>
          </Button>
        </div>
        {showTab && (
          <Card>
            <div className="text-sm">
              <p className="text-skin-muted">
                Get <b>15 Invites &amp; Complete 20 Tasks</b> (including Coin
                Master, Stash, or Harvest Land) to earn Extra <b>$4000!</b>
              </p>
              <p className="text-skin-muted mb-0">
                Our biggest ever bonus! Please follow the instructions
                correctly. This bonus should take about 1-2 days to complete.
              </p>
              <div className="my-3 mb-0">
                <div class="mb-1 text-base font-medium ">
                  1. Get 15 Referrals
                </div>
                <div class="w-full bg-gray-200 rounded-full h-4 mb-2 ">
                  <div
                    class="bg-skin-green-dark h-4 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <small className="font-normal">
                    <b className="text-skin-muted">You have: </b>16
                  </small>
                  <small className="font-normal">
                    <b className="text-skin-muted">Required: </b>15
                  </small>
                </div>
              </div>
              <div className="my-3">
                <div class="mb-1 text-base font-medium ">
                  2. Complete 20 Tasks
                </div>
                <div class="w-full bg-gray-200 rounded-full h-4 mb-2 ">
                  <div
                    class="bg-skin-green-dark h-4 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <small className="font-normal">
                    <b className="text-skin-muted">You have: </b>7
                  </small>
                  <small className="font-normal">
                    <b className="text-skin-muted">Required: </b>20
                  </small>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mb-3" style={{ width: "90%" }}>
                  <p className="mb-1 font-normal">
                    3. Complete <b>Stash</b> And <b>Coin Master</b> Task From{" "}
                    <Link to="https://cloutzap.com/taskwall">Task Wall</Link>.
                  </p>
                </div>
                <div style={{ width: "45% " }} className="flex">
                  <img
                    className="ml-1"
                    src="https://cloutzap.com/images/offer2.jpg"
                    alt="offer"
                    style={{ width: "48%", height: "auto" }}
                  />
                  <img
                    className="ml-1"
                    src="https://cloutzap.com/images/offer3.png"
                    alt="offer3"
                    style={{ width: "48%", height: "auto" }}
                  />
                </div>
              </div>
              <form method="POST" id="bonus-form">
                <input type="hidden" name="_token" value="" />
                <div className="grid gap-2 mt-2">
                  <Button className="bg-skin-green-dark text-skin-base">
                    <BsCheckAll className="mr-2" /> Bonus Completed, Claim $4000
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BonusTab;
