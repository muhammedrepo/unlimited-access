import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components/dashboard";
import Card from "../../components/UI/Card";
import { promodImage } from "../../utils/data";

const Promo = () => {
  return (
    <div>
      <Breadcrumb title="Promotional Posts" page="Promotional Posts" />
      <section className="mt-14">
        <Card>
          <div className="card-header pb-0">
            <h5 className="text-2xl m-0">Promotional Posts</h5>
          </div>
          <div className="card-body p-b-0">
            <span className="text-gray-500">
              Find some images below that you can post on your social media
              profile. For Example - Post On your Instagram Story, Snapchat
              Story, Facebook status and so on, to help you gain more referrals.
            </span>
            <br />
            <br />
            <span className="text-gray-500">
              <b>Mobile -</b> To save an image, tap on the image, then click on
              the arrow at the top right corner and click "Download Image".
            </span>
            <br />
            <br />
            <span className="text-gray-500">
              <b>Desktop -</b> Right click then save image.
            </span>
          </div>
          <div className="card-body grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {promodImage.map((item, index) => (
              <figure key={index}>
                <Link to={item.path}>
                  <img
                    className="w-full p-px bg-white border border-solid border-white rounded-sm max-w-full h-auto"
                    src={item.path}
                    alt="thumbnail"
                  />
                </Link>
              </figure>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Promo;
