import { FaAward, FaTicketAlt, FaTrophy } from "react-icons/fa";
import { Button } from "../../components";
import { Breadcrumb } from "../../components/dashboard";
import { Card, CardHeader } from "../../components/UI";

const GiveAway = () => {
  return (
    <div>
      <Breadcrumb title="Giveaway" page="Giveaway" />

      <section className="pt-14">
        <Card>
          <div className="card-body bg-transparent">
            <div className="row">
              <div className="text-center border-responsive">
                <h3 className="text-thin">Prize</h3>
                <h2 className="text-green-600 text-thin text-responsive mb-0">
                  $100{" "}
                </h2>
              </div>
              <div className="pb-1 px-5">
                <hr />
              </div>
              <div className="text-center border-responsive">
                <h3 className="text-gray-500 text-thin">Ending in</h3>
                <h2
                  className="text-green-600 text-thin text-responsive"
                  id="giveaway-countdown"
                >
                  <span id="timer-hrs">00</span>:<span id="timer-min">53</span>:
                  <span id="timer-sec">55</span>
                </h2>
              </div>
              <div className="pb-1 px-5">
                <hr />
              </div>
              <div className="text-center">
                <h3 className="text-gray-500 text-thin">Entries</h3>
                <h2 className="text-green-600 text-thin text-responsive">0</h2>
              </div>
            </div>
            <div className="pb-1 px-5">
              <hr />
            </div>
            <div className="row">
              <div className="col-12 pb-3 text-center">
                <div>
                  <h4 className="text-thin">
                    Enter the giveaway to earn the money!
                  </h4>
                  <p className="mb-0 text-gray-500 font-semibold">
                    The entry is free. All you have to do is click the button.
                  </p>
                  <form className="flex flex-col items-center">
                    <Button className="bg-skin-green-dark text-skin-base">
                      <FaTicketAlt className="mr-2 text-3xl" /> Enter
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section className="pt-14">
        <Card>
          <CardHeader title="Last Giveaway Winner" />

          <div className="card-body">
            <div className="media flex justify-between items-center">
              <div className="media-body flex items-center ms-2">
                <FaTrophy className="text-green-600 text-5xl mr-4" />
                <div>
                  <p className="font-semibold">
                    Member : <span className="text-green-600">iciltd5</span>
                  </p>
                  <p className="font-medium">
                    <b>$100</b> has been added to{" "}
                    <b className="text-green-600">
                      @<span className="text-green-600">iciltd5</span>
                    </b>{" "}
                    balance.
                  </p>
                </div>
              </div>
              <Button className="bg-skin-green-dark text-skin-base">
                <FaAward />
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default GiveAway;
