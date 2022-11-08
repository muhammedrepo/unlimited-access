import { FaShareSquare } from "react-icons/fa";

import { Breadcrumb } from "../../components/dashboard";
import Card from "../../components/UI/Card";

import { CardHeader } from "../../components/UI";
import VideoPostLists from "../../components/dashboard/social-posts/VideoPostLists";
import SocialPostAccordion from "../../components/dashboard/social-posts/SocialPostAccordion";

const SocialPosts = () => {
  return (
    <div>
      <Breadcrumb title="Social Posts" page="Get Paid To Post" />
      <section className="mt-14">
        <Card>
          <CardHeader
            icon=<FaShareSquare className="text-green-600" />
            title="Post And Earn"
            subtitle="Get Paid for posting on your Social Media. Choose a platform from
              below to begin!"
          />

          <div className="card-body">
            <VideoPostLists />
          </div>
        </Card>
      </section>
      <section className="pt-14">
        <SocialPostAccordion />
      </section>
    </div>
  );
};

export default SocialPosts;
