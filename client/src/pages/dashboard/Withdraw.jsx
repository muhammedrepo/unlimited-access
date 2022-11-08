import {
  FaCaretDown,
  FaCaretRight,
  FaCheckCircle,
  FaCheckSquare,
  FaExchangeAlt,
  FaPaypal,
} from "react-icons/fa";
import styled from "styled-components";
import { Button, FormRow } from "../../components";
import { Breadcrumb } from "../../components/dashboard";
import Card from "../../components/UI/Card";

const Wrapper = styled.div``;

const Withdraw = () => {
  return (
    <Wrapper>
      <Breadcrumb title="Withdraw" page="Cashout" />

      <section className="pt-14">
        <Card>
          <div className="flex items-center justify-between">
            <h5 className="mb-0 flex items-center gap-x-2 text-xl">
              <FaCheckCircle className=" text-green-600" /> Cash Out
            </h5>
            <span className="bg-green-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded mt-2">
              Overall Progress
            </span>
          </div>
          <div className="py-4 px-5">
            <hr />
          </div>
          <p className="inline-flex items-center gap-x-2">
            <FaCheckSquare className="text-green-600" /> Track how close you are
            to reaching the requirements for your first cash out!
          </p>
          <div className="grid grid-cols-2">
            <div>
              <span className="text-gray-500 flex items-center">
                Clicks <FaCaretRight />
              </span>
            </div>
            <div className="col-6 text-green-600 font-bold">100%</div>
            <div>
              <span className="text-gray-500 flex items-center">
                Referrals <FaCaretRight />
              </span>
            </div>
            <div className="col-6 text-green-600 font-bold">100%</div>
            <div>
              <span className="text-gray-500 flex items-center">
                Tasks <FaCaretRight />
              </span>
            </div>
            <div className="col-6 text-green-600 font-bold">100%</div>
            <div>
              <span className="text-gray-500 flex items-center">
                Social Post <FaCaretRight />
              </span>
            </div>
            <div className="col-6 text-green-600 font-bold">80%</div>
          </div>
          <div className="project-status mt-1 mb-2 text-center">
            <p className="text-gray-500">Total : 96%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </Card>
      </section>
      <section className="pt-14">
        <div className="max-w-lg mx-auto">
          <Card>
            <div className="card-body">
              <div>
                <h4 className="font-bold text-2xl mb-1">AMOUNT</h4>
                <p className="flex items-center text-muted mb-1 font-semibold">
                  Your Current Balance <FaCaretDown />
                </p>

                <FormRow type="text" disabled="disabled" value="$137" />
              </div>
              <div>
                <h4 className="font-bold mt-4 mb-1 text-2xl">PAYMENT METHOD</h4>
                <div className="input-group relative flex items-center w-full">
                  <span className="absolute p-2">
                    <FaPaypal style={{ color: "#0079C1" }} />
                  </span>
                  <FormRow type="text" disabled="disabled" />
                </div>
              </div>
              <div className="grid gap-2 w-full mt-4">
                <Button
                  icon=<FaExchangeAlt />
                  text="Withdraw"
                  bgColor="green"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Wrapper>
  );
};

export default Withdraw;
