import { useState } from "react";
import { FaDollarSign, FaInfoCircle, FaRegThumbsUp } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Button } from "../../components";
import { Banner, Breadcrumb } from "../../components/dashboard";
import Card from "../../components/UI/Card";

const TaskWall = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Breadcrumb title="Task Wall" page="Task Wall" />

      <section className="w-full mt-14">
        <Card>
          <div className="p-8 bg-transparent">
            <Banner bgColor="button-brown">
              <FaDollarSign className="inline-flex" /> Badge link
            </Banner>

            <p>
              Complete the easy tasks to earn extra money. This will be
              automatically added to your account within 5-10 minutes after
              completion.
            </p>
            <p className="mb-4">
              Make sure you <b>follow the task instructions carefully</b> to
              receive credit for that task.
            </p>
            <div className="grid gap-2">
              <Button
                className="bg-skin-button-brown text-skin-base"
                onClick={() => setShowModal(!showModal)}
              >
                Want to complete offers more than once?
              </Button>

              {showModal && (
                <div className=" flex items-center justify-center">
                  <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                    <div className="relative bg-skin-base rounded-lg shadow">
                      <div className="modal-header flex justify-between items-start p-4 rounded-t border-b">
                        <h5 className="modal-title flex gap-x-2">
                          <FaInfoCircle className="text-skin-fill text-2xl" />{" "}
                          Multiple Tasks
                        </h5>
                        <button
                          type="button"
                          onClick={() => setShowModal(!showModal)}
                        >
                          <GrClose className=" text-xl" />
                        </button>
                      </div>
                      <div className="modal-body p-6 space-y-6 text-center">
                        <p>
                          If you want to complete tasks multiple times, you can
                          do so by using another device. For example, if you
                          complete a task on you iPhone, you can complete it
                          again on your <b>computer</b> or an <b>old iPhone</b>{" "}
                          or{" "}
                          <b>
                            other device that hasn't been used to complete it
                            yet
                          </b>
                          .
                        </p>
                        <p className="font-bold">Ready to continue?</p>
                        <Button className="bg-skin-green-dark text-skin-base">
                          <FaRegThumbsUp className="mr-2" /> Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </section>

      <section className="w-full mt-12">
        <Card className="ribbon-wrapper card">
          <div className="p-8 bg-transparent">
            <Banner bgColor="green-dark">App Task</Banner>

            <p className="alert alert-light solid alert-rounded">
              <strong>
                There are currently no app tasks available for you.
              </strong>{" "}
              Please check back later.{" "}
              <strong>
                <u>Please Note</u> : App Tasks are only available when you login
                from a mobile device, they usually pay more than survey tasks.
              </strong>
            </p>
          </div>
        </Card>
      </section>

      <section className="mt-12">
        <Card className="ribbon-wrapper">
          <div className="p-8 bg-transparent">
            <Banner bgColor="green-dark">Survey Tasks</Banner>
            <div className="flex"></div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default TaskWall;
