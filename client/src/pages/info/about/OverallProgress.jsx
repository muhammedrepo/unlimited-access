import { Button } from "../../../components";
import { Card } from "../../../components/UI";

const OverallProgress = () => {
  return (
    <section className="mx-auto max-w-5xl border-0 shadow rounded-4 mb-5 lg:mb-0 transform -translate-y-1/4">
      <Card>
        <div className="p-16">
          <div className="flex items-center">
            <div className="col-md-6">
              <div className="heading-block border-bottom-0 mb-0">
                <div className="badge rounded-pill badge-default">
                  #1 Clout Network
                </div>
                <h3 className="nott ls0 mb-3">
                  CloutZap | The #1 Influencer Network
                </h3>
                <p className="mb-2">
                  CloutZap has caused an uproar on all social media! Our
                  affiliates are being paid to share their special referral
                  link. Did we really become the #1 Influencer Network in this
                  short time? YES, we’re that good. Influencers enjoy our
                  transparency, our flexibility, and our high payouts! With us,
                  any social media user with any size following can become a
                  successful influencer.
                </p>
                <Button
                  url="/register"
                  className="bg-skin-green-dark text-skin-base"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className=""></div>
                </div>
              </div>
              <p className="text-end text-muted text-smaller">
                Overall Progress:{" "}
                <span className="text-green-700 font-bold text-larger">
                  +200%
                </span>
              </p>
              <canvas
                id="chart-0"
                style={{
                  display: "block",
                  height: "226px",
                  width: "452px",
                }}
                width="904"
                height="452"
                className="chartjs-render-monitor"
              ></canvas>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default OverallProgress;
