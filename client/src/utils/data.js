import {
  FaCopy,
  FaFacebook,
  FaFacebookMessenger,
  FaGift,
  FaInstagram,
  FaMobile,
  FaMousePointer,
  FaPinterest,
  FaShareSquare,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaUserPlus,
  FaVk,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { ImCheckmark } from "react-icons/im";
import { BiInfoCircle, BiTime } from "react-icons/bi";
import { FiDollarSign, FiHome, FiSettings, FiThumbsUp } from "react-icons/fi";
import {
  BsBank2,
  BsBoxArrowUp,
  BsClock,
  BsPeople,
  BsQuestion,
  BsStar,
} from "react-icons/bs";
import { GoNote } from "react-icons/go";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { newReferral } from "../images";
import { Button, CopyreferalLink } from "../components";
import { Link } from "react-router-dom";

export const menuItems = [
  {
    id: 1,
    text: "home",
    path: "/home",
  },
  {
    id: 2,
    text: "how it works",
    path: "/how",
  },
  {
    id: 3,
    text: "payment proofs",
    path: "/proofs",
  },
  {
    id: 4,
    text: "user testimonials",
    path: "/testimonials",
  },
  {
    id: 5,
    text: "info",

    submenu: [
      {
        id: 1,
        text: "about us",
        path: "/about-us",
      },
      {
        id: 2,
        text: "faq",
        path: "/info-faq",
      },
      {
        id: 3,
        text: "fraud policy",
        path: "/fraud-policy",
      },
      {
        id: 4,
        text: "terms & conditions",
        path: "/terms-conditions",
      },
      {
        id: 5,
        text: "privacy policy",
        path: "/privacy-policy",
      },
    ],
  },
];

export const dashboardLinks = [
  {
    id: 1,
    text: "home",
    path: "/",
    icon: <FiHome />,
  },

  {
    id: 2,
    text: "referrals",
    number: "$15+",
    icon: <BsPeople />,
    submenu: [
      {
        id: 1,
        text: "refer & earn",
        number: "$15+",
        icon: <FaUserPlus />,
        path: "/referrals",
      },
      {
        id: 2,
        text: "referrals guide",
        icon: <BiInfoCircle />,
        path: "/referrals-guide",
      },
      {
        id: 3,
        text: "promotional posts",
        icon: <FaInstagram />,
        path: "/promo",
      },
    ],
  },
  {
    id: 3,
    text: "task wall",
    number: "$100+",
    path: "task-wall",
    icon: <FiDollarSign />,
  },
  {
    id: 4,
    text: "social posts",
    number: "$45+",
    path: "social-posts",
    icon: <BsBoxArrowUp />,
  },
  {
    id: 5,
    text: "daily quests",
    path: "daily-quests",
    icon: <HiOutlineTrendingUp />,
  },
  {
    id: 6,
    text: "giveaway",
    path: "giveaway",
    icon: <BsClock />,
  },
  {
    id: 7,
    text: "withdraw",
    path: "withdraw",
    icon: <BsBank2 />,
  },
  {
    id: 8,
    text: "withdraw history",
    path: "withdraw-history",
    icon: <GoNote />,
  },
  {
    id: 9,
    text: "my account",
    path: "my-account",
    icon: <FiSettings />,
  },
  {
    id: 10,
    text: "faq",
    path: "faq",
    icon: <BsQuestion />,
  },
  {
    id: 11,
    text: "payment-proofs",
    path: "proofs",
    icon: <BsStar />,
  },
  {
    id: 12,
    text: "user review",
    path: "reviews",
    icon: <FiThumbsUp />,
  },
];

export const manyWays = [
  {
    id: 1,
    title: "REFER FRIENDS",
    subtitle:
      "Refer A Friend And Earn $15 Per Referral and Also Receive 15% Bonus!",
    icon: <FaShareSquare />,
    path: "/referrals",
  },
  {
    id: 2,
    title: "DOWNLOAD APPS",
    subtitle: "Earn $50+ Per App Installs",
    icon: <FaMobile />,
    path: "/",
  },
  {
    id: 3,
    title: "COMPLETE SURVEYS",
    subtitle: "Earn $100+ Per Survey",
    icon: <GrTasks />,
    path: "/task-wall",
  },
  {
    id: 4,
    title: "DAILY QUESTS",
    subtitle: "Login Daily For Extra $$$ Bonus Quests Everyday.",
    icon: <ImCheckmark />,
    path: "/daily-quests",
  },
  {
    id: 5,
    title: "EARN THROUGH GIVEAWAY",
    subtitle: "Participate in the Giveaway which rewards $100 every hour!",
    icon: <BiTime />,
    path: "/giveaway",
  },
  {
    id: 6,
    title: "POST ON SOCIAL MEDIA",
    subtitle: "POST ON SOCIAL MEDIA",
    icon: <FaYoutube />,
    path: "/social-posts",
  },
];

export const earnMore = [
  {
    id: 1,
    title: "clicks",
    subtitle: "Get paid $2 per click on your referral link.",
    icon: <FaMousePointer />,
  },
  {
    id: 2,
    title: "referrals",
    subtitle: "Get paid $15 per referral sign ups.",
    icon: <FaUserPlus />,
  },
  {
    id: 3,
    title: "TASKS",
    subtitle:
      "Get paid to do simple tasks i.e. Play games, test out free aps and more.",
    icon: <GrTasks />,
  },
  {
    id: 4,
    title: "DAILY QUESTS",
    subtitle: "Get paid for completing daily Quests.",
    icon: <ImCheckmark />,
  },
  {
    id: 5,
    title: "HOURLY GIVEAWAY",
    subtitle: "Get a chance to win $$ every hour!",
    icon: <BiTime />,
  },
  {
    id: 6,
    title: "JOIN AND GET BONUS",
    subtitle: "Sign up now and Earn $35 as a bonus.",
    icon: <FaGift />,
  },
];

export const faqlinks = [
  {
    id: 1,
    link: "whatiscloutzap",
    title: "What is CloutZap?",
    content:
      "CloutZap is an Money Earning Network, Your favorite social media influencer most likely works with us. We’ve established the reputation as the #1 Influencer Network according to Forbes.",
  },
  {
    id: 2,
    link: "howwework",
    title: "How we work?",
    content: `Advertisers pay CloutZap to reach influencers/people like you. Revenue generated from us goes back to our affiliates/members. We love and appreciate our members so 
      <a href="https://cloutzap.com/register">sign up</a>
    now.`,
  },
  {
    id: 3,
    link: "howmuch",
    title: "How much does it cost to join?",
    content:
      "CloutZap is absolutely free to join and we intend on keeping it that way. We make money because of our affiliates and our affiliates make money because of us.",
  },
  {
    id: 4,
    link: "canireallymakemoney",
    title: "Can I Really Make/Earn Money Using CloutZap?",
    content:
      "Anyone is able to make money on CloutZap. You can earn by inviting friends to our site. Referring isn’t for you? You can also earn by testing some apps or by playing some games in the member's area.",
  },
  {
    id: 5,
    link: "whyjoinus",
    title: "Why Join Us?",
    content:
      "We have been in the social marketing industry for a while now. Our parent company has been creating online monetizing solutions since 2010.",
  },
  {
    id: 6,
    link: "whendowepayourusers",
    title: "When do we pay our Users?",
    content:
      "You’ll receive your payment instantly once you request your earnings and have set your payment method. If we have any difficulties with your payment, we will email you with the email you’ve provided to us.",
  },
  {
    id: 7,
    link: "iscloutzapsafe",
    title: "Is CloutZap safe?",
    content: `We take your security and privacy very seriously. We encrypt all
    your data so that no-one can see it, <b>NOT EVEN US</b>. We
    
      <b>
        encrypt your password on our servers so that it cannot be read by anyone
        <u>it shouldn't be</u>
      </b>
    
  
    We don't share your data with anyone else without your permission.
    By using our Cashout Options to cash out your earnings, we don't
    hold any of your financial information. This is covered in more
    detail in our Privacy Promise. If you have specific questions let
    us know at contact@cloutzap.com`,
  },
  {
    id: 8,
    link: "whataretasks",
    title: "What Are Tasks?",
    content: `<div>There are several types of tasks we offer:
           
             
    <li>
      <b>App Tasks</b> – User needs to install the app, run it for 30
      seconds. Exact instructions will be shown once the task is
      started.
    </li>
    <li>
      <b>Daily Quests</b> – Complete daily quest to earn more and
      more.
    </li>
    <li>
      <b>Survey</b> – User needs to take a quick survey about our
      sponsor and answer all the questions honestly. Devices:
      Android/iOS/Desktop/Tablet(
    </li>
    </div>`,
  },
  {
    id: 9,
    link: "willigetbanned",
    title: "Will I get banned if I have multiple accounts?",
    content:
      "We take fraud very serious and don’t allow users to make more than one account. If you’re having issues with your account please contact your account manager.",
  },
  {
    id: 10,
    link: "whatcountries",
    title: "What countries CloutZap is available in?",
    content: "CloutZap is available in over 190 countries.",
  },
];

export const getfreetraffic = [
  {
    icon: <FaFacebook />,
    buttonColor: "#4267B2",
    title: "share on facebook",
    path: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsend.cloutzap.com%2Fcoolzyte&amp;quote=I'm inviting you to join CloutZap, a website that lets you earn money effortlessly. I have already earned $2,541 today and you can too. You get paid for playing games, testing apps and even for using social media. Sign up with the link below and earn instant $35 sign up bonus!",
  },
  {
    icon: <FaInstagram />,
    buttonColor: "#E1306C",
    title: "share on instagram",
    path: "instagram.com",
  },
  {
    icon: <FaWhatsapp />,
    buttonColor: "#25D366",
    title: "share on whatsapp",
    path: "whatsapp://send?text=I'm inviting you to join CloutZap, a website that lets you earn money effortlessly. I have already earned $2,541 today and you can too. You get paid for playing games, testing apps and even for using social media. Sign up with the link below and earn instant $35 sign up bonus! https://send.cloutzap.com/coolzyte",
  },
  {
    icon: <FaTwitter />,
    buttonColor: "#1DA1F2",
    title: "share on twitter",
    path: "https://twitter.com",
  },
  {
    icon: <FaPinterest />,
    buttonColor: "#E60023",
    title: "share on pinterest",
    path: "https://pinterest.com",
  },
  {
    icon: <FaVk />,
    buttonColor: "#4C75A3",
    title: "share on VK",
    path: "https://vk.com/share.php?url=https%3A%2F%2Fsend.cloutzap.com%2Fcoolzyte&amp;title=Earn $500 Daily From Anywhere Effortlessly&amp;description=Join CloutZap, a website that lets you earn money effortlessly. I have already earned $2,541 today and you can too. You get paid for playing games and even for using social media. Signup now and earn instant $35 signup bonus!&amp;image=https%3A%2F%2Fcloutzap.com%2Fsocials.png",
  },
  {
    icon: <FaFacebookMessenger />,
    buttonColor: "#1982FC",
    title: "direct message",
    path: "facebook.com",
  },
];

export const newreferral = [
  {
    id: 1,
    avatar: newReferral,
    username: "ali8989",
    joined: "10 Jan 2022",
    earnings: "$350",
  },
  {
    id: 2,
    avatar: newReferral,
    username: "ashley",
    joined: "10 Jan 2022",
    earnings: "$39",
  },
  {
    id: 3,
    avatar: newReferral,
    username: "shola099",
    joined: "10 Jan 2022",
    earnings: "$45",
  },
  {
    id: 4,
    avatar: newReferral,
    username: "fiyi1902",
    joined: "10 Jan 2022",
    earnings: "$65",
  },
  {
    id: 5,
    avatar: newReferral,
    username: "tunde56",
    joined: "10 Jan 2022",
    earnings: "$85",
  },
  {
    id: 6,
    avatar: newReferral,
    username: "othomy",
    joined: "10 Jan 2022",
    earnings: "$35",
  },
  {
    id: 7,
    avatar: newReferral,
    username: "ashrofdev",
    joined: "10 Jan 2022",
    earnings: "$95",
  },
  {
    id: 8,
    avatar: newReferral,
    username: "jonny555",
    joined: "10 Jan 2022",
    earnings: "$35",
  },
];

export const postandearn = [
  {
    id: 1,
    name: "YouTube Videos",
    icon: <FaYoutube />,
    bgColor: "#FF0000",
    bonus: "Earn $45 Per Video",
    path: "https://www.youtube.com",
  },
  {
    id: 2,
    name: "Facebook Post",
    icon: <FaFacebook />,
    bgColor: "#4267B2",
    bonus: "Earn $45 Per Video",
    path: "https://www.facebook.com",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram />,
    bgColor: "#E1306C",
    bonus: "Earn $45 Per Post",
    path: "https://www.instagram.com",
  },
  {
    id: 4,
    name: "Instagram Reels",
    icon: <FaInstagram />,
    bgColor: "#E1306C",
    bonus: "Earn $20 Per Video",
    path: "https://www.instagram.com",
  },
  {
    id: 5,
    name: "Snapchat Bonus",
    icon: <FaSnapchat />,
    bgColor: "#FFFC00",
    bonus: "Earn $80 Per Video",
    path: "https://www.snapchat.com",
  },
  {
    id: 6,
    name: "TikTok Most Used",
    icon: <FaTiktok />,
    bgColor: "#EE1D52",
    bonus: "Earn $80 Per Video",
    path: "https://www.tiktok.com",
  },
  {
    id: 7,
    name: "Facebook Story",
    icon: <FaFacebook />,
    bgColor: "#4267B2",
    bonus: "Earn $15 Per Story",
    path: "https://www.facebook.com",
  },
  {
    id: 8,
    name: "Instagram Story",
    icon: <FaInstagram />,
    bgColor: "#E1306C",
    bonus: "Earn $10 Per Story",
    path: "https://www.instagram.com",
  },
];

export const socialguides = [
  {
    id: 1,
    name: "Facebook",
    badge: "#1 most used",
    icon: <FaFacebook />,
    bgColor: "#4267B2",
  },
  {
    id: 2,
    name: "Instagram",
    badge: "hot",
    icon: <FaInstagram />,
    bgColor: "#E1306C",
  },
  {
    id: 3,
    name: "TikTok",
    badge: "Trends Starts Here",
    icon: <FaTiktok />,
    bgColor: "#EE1D52",
  },
  {
    id: 4,
    name: "Twitter",
    badge: "#1 most used",
    icon: <FaTwitter />,
    bgColor: "#1DA1F2",
  },
  {
    id: 5,
    name: "Snapchat",
    badge: "#1 most used",
    icon: <FaSnapchat />,
    bgColor: "#FFFC00",
    bonus: "",
  },
  {
    id: 6,
    name: "WhatsApp",
    badge: "#1 most used",
    icon: <FaWhatsapp />,
    bgColor: "#25D366",
  },
];

const Bio = () => {
  return (
    <>
      <div className="card-body">
        <h5 className="font-bold">1. Edit Profile</h5>
        <p className="card-text">
          Navigate to your Facebook profile and hit the pencil icon in the top
          right corner.
        </p>
        <h5 className="font-bold">2. Update Website</h5>
        <p className="card-text">
          Copy And Paste your Invite link in the website field.
        </p>
        <CopyreferalLink />
        <h5 className="font-bold">3. Update Bio</h5>
        <p className="card-text">
          Update your bio/status/about section with some of these
          recommendations. This helps your profile stand out and attract more
          clicks and referrals!
        </p>
        <dl>
          <li>Top 1% Earner - I make money in minutes 💸</li>
          <li>CloutZap Influencer - Start earning instantly! 🤑</li>
          <li>Top CloutZap Earner 🏆</li>
          <li>CloutZap Member - Easiest Way To Earn Online.</li>
          <li>Using CloutZap I Earn While I Sleep.</li>
        </dl>
      </div>
    </>
  );
};

const Story = ({ bgColor }) => {
  return (
    <div className="card-body">
      <h5 className="font-bold">1. Posting</h5>
      <p className="card-text">
        Navigate to your profile and hit 'Add story'. Upload your own content or
        choose from a variety located in the{" "}
        <Link to="https://cloutzap.com/promo">Promotional Posts</Link> page.
      </p>
      <h5 className="font-bold">2. Captioning</h5>
      <p className="card-text">
        Captions are important! Use the captions we have below or on our{" "}
        <Link to="https://cloutzap.com/fbpost">Facebook Submissions page</Link>{" "}
        then tag 3-5 friends.
      </p>
      <textarea
        className="form-control"
        rows="2"
        onmouseup="return false;"
        readonly=""
      >
        Join cloutzap.com and start making money online!
      </textarea>
      <div className="mt-2 mb-3 grid">
        <Button
          icon=<FaCopy />
          text="Copy Caption"
          style={{ backgroundColor: bgColor }}
        />
      </div>
      <p className="card-text mt-1">
        If possible, add your referral link to your story. If not, tell users to
        click your link in your Facebook Profile.
      </p>
      <h5 className="font-bold">3. Be Smart</h5>
      <p className="card-text">
        We pay you for posting content on our{" "}
        <Link to="https://cloutzap.com/socials">Submissions Page</Link>. Take
        advantage of that by using these steps and then submitting your post to
        earn!
      </p>
    </div>
  );
};

export const facebookguide = [
  {
    id: 1,
    title: "Your Bio",
    info: <Bio />,
    bgColor: "#4267B2",
  },
  {
    id: 2,
    title: "Story Post",
    info: <Story />,
    bgColor: "#4267B2",
  },
  {
    id: 3,
    title: "Page Posts",
    info: "infor goes here",
    bgColor: "#4267B2",
  },
  {
    id: 4,
    title: "Group",
    info: "infor goes here",
    bgColor: "#4267B2",
  },
  {
    id: 5,
    title: "Messenger App",
    info: "infor goes here",
    bgColor: "#4267B2",
  },
];
export const instagramguide = [
  {
    id: 1,
    title: "Your Bio",
    info: <Bio />,
    bgColor: "#E1306C",
  },
  {
    id: 2,
    title: "Instagram Post",
    info: "infor goes here",
    bgColor: "#E1306C",
  },
  {
    id: 3,
    title: "Reels",
    info: "infor goes here",
    bgColor: "#E1306C",
  },
  {
    id: 4,
    title: "Story",
    info: "infor goes here",
    bgColor: "#E1306C",
  },
];

export const tiktokguide = [
  {
    id: 1,
    title: "Create a viral post",
    info: <Bio />,
    bgColor: "#EE1D52",
  },
  {
    id: 2,
    title: "Add link to your bio",
    info: "infor goes here",
    bgColor: "#EE1D52",
  },
];

export const twitterguide = [
  {
    id: 1,
    title: "Your Twitter Bio",
    info: <Bio />,
    bgColor: "#1DA1F2",
  },
  {
    id: 2,
    title: "Tweet Tweet Tweet",
    info: "infor goes here",
    bgColor: "#1DA1F2",
  },
  {
    id: 3,
    title: "Tweet Scavenging",
    info: "infor goes here",
    bgColor: "#1DA1F2",
  },
];

export const snapchatguide = [
  {
    id: 1,
    title: "Make Content & share",
    info: <Bio />,
    bgColor: "#FFFC00",
  },
  {
    id: 2,
    title: "Spotlights",
    info: "infor goes here",
    bgColor: "#FFFC00",
  },
];

export const whatsappguide = [
  {
    id: 1,
    title: "Individual Promo",
    info: <Bio />,
    bgColor: "#25D366",
  },
  {
    id: 2,
    title: "Group Promo",
    info: "infor goes here",
    bgColor: "#25D366",
  },
];

export const promodImage = [
  {
    path: "https://cloutzap.com/promotionals/Promo1.png",
  },
  {
    path: "https://cloutzap.com/promotionals/Promo2.png",
  },
  {
    path: "https://cloutzap.com/promotionals/Promo3.png",
  },
  {
    path: "https://cloutzap.com/promotionals/Promo4.png",
  },
  {
    path: "https://cloutzap.com/promotionals/Promo5.png",
  },
  {
    path: "https://cloutzap.com/promotionals/Promo6.png",
  },
  {
    path: "https://cloutzap.com/promotionals/Promo7.png",
  },
  {
    path: "https://cloutzap.com/promotionals/Promo8.png",
  },
];
