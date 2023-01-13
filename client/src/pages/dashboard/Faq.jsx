import React from "react";
import { FaInfoCircle, FaQuestion } from "react-icons/fa";
import { Breadcrumb } from "../../components/dashboard";
import { Card, CardHeader } from "../../components/UI";
import { generalQuestion, membersFaq } from "../../utils/data";

const Faq = () => {
  return (
    <div>
      <Breadcrumb title="Members Help Area" page="F.A.Q" />
      <section className="pt-12">
        <Card>
          <div>
            <div className="media faq-widgets flex items-center justify-between">
              <div className="media-body">
                <CardHeader
                  title="Members Help Area"
                  subtitle="Find helpful videos, members' frequently asked questions, and tools/tips to help you earn more below."
                />
              </div>
              <FaInfoCircle className="text-5xl" />
            </div>
          </div>
        </Card>
      </section>
      <section className="pt-12">
        <h5 className="text-2xl">Member Faq Area</h5>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
          {membersFaq.map((answer) => {
            const { id, question, info } = answer;

            return (
              <Card key={id}>
                <div className="inline-flex items-start space-x-4">
                  <span>
                    <FaQuestion className="text-3xl" />
                  </span>
                  <div>
                    <h6 className="text-xl">{question}</h6>
                    <div
                      className="mb-3 font-light text-gray-500"
                      dangerouslySetInnerHTML={{ __html: info }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <Card>
          <div className="inline-flex items-start space-x-4">
            <span>
              <FaQuestion className="text-3xl" />
            </span>
            <div>
              <h6 className="text-xl">
                I completed a YouTube submission but wasn't credited?
              </h6>
              <p className="mb-3 font-light text-gray-500">
                If you weren't credited, it is due to the following reasons; You
                already submitted the video before, Your title is wrong, Your
                description is wrong
              </p>
            </div>
          </div>
        </Card>
      </section>
      <section className="pt-12">
        <h5 className="text-2xl">General Questions</h5>
        <div className="">
          {generalQuestion.map((item) => {
            const { id, info, question } = item;
            return (
              <div key={id} className="mb-8">
                <Card>
                  <div className="inline-flex items-start space-x-4">
                    <span>
                      <FaQuestion className="text-3xl" />
                    </span>
                    <div>
                      <h6 className="text-xl">{question}</h6>
                      <div
                        className="mb-3 font-light text-gray-500"
                        dangerouslySetInnerHTML={{ __html: info }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Faq;
