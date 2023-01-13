import {
  FaCommentDollar,
  FaCopy,
  FaDollarSign,
  FaFacebook,
  FaFacebookMessenger,
  FaGift,
  FaInstagram,
  FaMobile,
  FaMoneyBillWave,
  FaMousePointer,
  FaPaypal,
  FaPinterest,
  FaSearchDollar,
  FaShareSquare,
  FaSignInAlt,
  FaSnapchat,
  FaTasks,
  FaTiktok,
  FaTwitter,
  FaUserPlus,
  FaVk,
  FaWallet,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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
import {
  mobile,
  newReferral,
  quest,
  referral,
  survey,
  trophy,
} from "../assets";
import { Button, CopyreferalLink } from "../components";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";

export const menuItems = [
  {
    id: 1,
    text: "home",
    path: "/landing",
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
    path: "/review",
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

export const footerLinks = [
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
    text: "payment proofs",
    path: "/proofs",
  },
  {
    id: 4,
    text: "user testimonials",
    path: "/review",
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
    submenus: [
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
    path: "settings",
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
    path: "review",
    icon: <FiThumbsUp />,
  },
];

export const testVid = [
  {
    id: 1,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 2,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 3,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 4,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 5,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 6,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 7,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
  },
  {
    id: 8,
    vid: "https://www.youtube.com/embed/mCULIS_F6Nw",
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
    icon: <FaTasks />,
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
    icon: <FaTasks />,
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

export const startMakingMoney = [
  {
    id: 1,
    title: "Join CloutZap",
    content:
      "Sign up for a CloutZap account and join the community of people making money online with social media.",
  },
  {
    id: 2,
    title: "Share & Earn",
    content:
      "Invite your friends, family, and colleagues to our site by sharing your referral link. You will earn $15 for every person you invite that joins our site.",
  },
  {
    id: 3,
    title: "Get Paid",
    content:
      "Cash out your earnings instantly! We pay our members through PayPal, CashApp, Venmo, Bitcoin, Mailed checks, and more!",
  },
];

export const paymentProofImages = [
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_1.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_3.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_9.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_4.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_1.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_3.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_9.jpg",
  },
  {
    url: "https://cloutzap.com/images/payments/cloutzap_payment_4.jpg",
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

export const approvedPost = [
  {
    id: 1,
    name: "YouTube Videos",
    icon: <FaYoutube />,
    bgColor: "#FF0000",
    path: "https://www.youtube.com",
  },

  {
    id: 2,
    name: "Instagram",
    icon: <FaInstagram />,
    bgColor: "#E1306C",
    path: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "Instagram Reels",
    icon: <FaInstagram />,
    bgColor: "#E1306C",
    path: "https://www.instagram.com",
  },

  {
    id: 4,
    name: "TikTok Most Used",
    icon: <FaTiktok />,
    bgColor: "#000",
    path: "https://www.tiktok.com",
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

export const questResets = [
  {
    id: 1,
    title: "1 Offer",
    sub: "1 More Offer Needed",
    progress: "0 Offer",
    goal: "1 Offer",
    claim: "$100",
  },
  {
    id: 2,
    title: "1 Offer",
    sub: "3 More Invites Needed",
    progress: "0 Invite",
    goal: "3 Invites",
    claim: "$80",
  },
  {
    id: 3,
    title: "3 Offers",
    sub: "3 More Offers Needed",
    progress: "0 Offer",
    goal: "3 Offers",
    claim: "$100",
  },
  {
    id: 4,
    title: "5 Invites",
    sub: "5 More Invites Needed",
    progress: "0 Invite",
    goal: "5 Invites",
    claim: "$120",
  },
  {
    id: 5,
    title: "5 Offers",
    sub: "5 More Offers Needed",
    progress: "0 Offer",
    goal: "5 Offers",
    claim: "$500",
  },
  {
    id: 6,
    title: "10 Invites",
    sub: "10 More Invites Needed",
    progress: "0 Offer",
    goal: "10 Invites",
    claim: "$250",
  },
  {
    id: 7,
    title: "10 Offers",
    sub: "10 More Offers Needed",
    progress: "0 Offer",
    goal: "10 Offers",
    claim: "$1000",
  },
];

export const paymentHistory = [
  {
    id: 1,
    icon: <FaDollarSign />,
    title: "Total Earned",
    sub: <Counter end="2541" />,
  },
  {
    id: 2,
    icon: <FaWallet />,
    title: "Total Withdraw",
    sub: <Counter end="2404" />,
  },
  {
    id: 3,
    icon: <FaPaypal />,
    title: "Payment Method",
    sub: "PayPal",
  },
  {
    id: 4,
    icon: <FaSearchDollar />,
    title: "Payment processing",
    sub: <Counter end="0" />,
  },
];

export const membersFaq = [
  {
    id: 1,
    question: "What's the best way to get referrals?",
    info: "Getting referrals should be fairly easy. Start off by promoting your referral link on every social media platform and educating your followers about CloutZap using our various Promotional Posts. You can also try direct messaging (IG DM, Text, WhatsApp, etc) as it provides a one on one conversation.",
  },
  {
    id: 2,
    question: "Are there other ways to earn?",
    info: `
    <p className="font-medium">Of course! If referring is not your thing, you can always <b>Earn MORE through our <a href="https://cloutzap.com/taskwall">Task Wall</a>!</b><br>The Task Wall features a variety of free apps, surveys, and offers from our sponsors. You can earn by testing out these free apps, completing free surveys, or trying out free offers!</p>
    <p className="font-medium">Some more ways to earn on CloutZap are listed below:</p>
    <li className="text-muted fw-bold"><a href="https://cloutzap.com/quests" target="_blank">Earn through Daily Quests</a></li>
    <li className="text-muted fw-bold"><a href="https://cloutzap.com/socials" target="_blank">Earn through posting on Social Media</a></li>
    <li className="text-muted fw-bold"><a href="https://cloutzap.com/giveaway" target="_blank">Participate in the Giveaway</a></li>
`,
  },
  {
    id: 3,
    question: "How much do I need to cashout?",
    info: "We don't have a minimum payment amount to cashout. However, you must meet some requirements before you cash out for the first time to help prevent fraud.",
  },
  {
    id: 4,
    question: "How soon can I receive my payment?",
    info: "We believe that getting paid shouldn't be a hassle. Once you cash out, your payment will be scheduled, and you will receive it immediately based on that payment schedule.",
  },
  {
    id: 5,
    question: "My friend signed up but I didn't get credited?",
    info: `
    <p className="font-medium">If your friend/family joined and you weren't credited, it could be because of the possible issues below.
</p><ul className="font-medium text-muted">
<li>- Your friend already has an account.</li>
<li>- Your referral was fraudulent.</li>
<li>- You provided the wrong referral link.</li>
<li>- They entered the wrong link.</li>
<li>- They forgot to sign up with your link.</li>
</ul><p></p>
`,
  },
  {
    id: 6,
    question: "I completed a task in the Task Wall but wasn't credited?",
    info: "After completing a task, please allow 5-10 minutes for it to register back to our system. If you still aren't credited you either did the task incorrectly by not following the directions, OR you already completed the task in the past. Our advice is try a different task, we have variety of different tasks available.",
  },
];

export const generalQuestion = [
  {
    id: 1,
    question: "Is CloutZap safe?",
    info: `
    <p className="font-medium">We take your security and privacy very seriously. We encrypt all your data so that no-one can see it, <b>NOT EVEN US</b>. We <b>encrypt your password on our servers so that it cannot be read by anyone <u>it shouldn't be</u></b>. We don't share your data with anyone else without your permission. By using our Cashout Options to cash out your earnings, we don't hold any of your financial information. This is covered in more detail in our <a href="https://cloutzap.com/faq" target="_blank">FAQS Page.</a></p>
`,
  },
  {
    id: 2,
    question: "What will you do with the information I give you?",
    info: `
    
    <p className="font-medium">CloutZap does not share it's user data with third parties. When you join CloutZap, you agree to our information use and data protection policy as explained in our terms and conditions.<br>As in everything we do, we're honest and transparent about how we use your info – for more information take a look at our <a href="https://cloutzap.com/faq" target="_blank">FAQS Page.</a>.<br>If you leave CloutZap, we'll remove as much information as we can about your account other than data we are required to hold under statute.</p>

`,
  },
  {
    id: 3,
    question: `Yes. You can make changes to your account from the account settings`,
    info: ` <p className="font-medium" target="_blank">“My Account”</a> tab on your CloutZap Dashboard. If you would like to change the email address that you use to log in to your account you can do so here. Remember, you are only permitted to have one CloutZap account so edit your email address to the one you want to use rather than create a new account.</p>
    
`,
  },
  {
    id: 4,
    question: "I completed an App Task but wasn't credited Why?",
    info: `
    <p className="font-medium">After completing an App Tasks, please allow 15-25 minutes for it to register back to our system. If you still aren't credited, you either did the App Task incorrectly by not following the directions, OR you already completed the App Task in the past.</p>
    <p className="font-medium">Some other reasons why you didn't get credited for an App Task :</p>
<ul className="font-medium text-muted">
  <li>- It may take 1-24 hours to reward you. <b>Make sure you have followed all the instructions mentioned for that task.</b></li>
  <li>- You've already done the task in the past or you have owned the app in the past.</li>
  <li>- One of the main reason : <b>You did not follow the instructions on the task.</b></li>
  <li>- Do not use VPNs. They may affect your Tasks.</li>
</ul>
<p className="font-medium">We have many other tasks available on <a href="https://cloutzap.com/taskwall">Task Wall</a>, so please try different ones!</p>

`,
  },
];

export const howItWorks = [
  {
    id: 1,
    icon: <FaSignInAlt />,
    title: "Join CloutZap",
    content:
      "We reward our members with money for the everyday things they already do online.",
  },
  {
    id: 2,
    icon: <FaCommentDollar />,
    title: "Earn Money",
    content:
      "Invite your friends to our site by sharing your referral link and earn $15 for every person you invite.",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    title: "Get Paid",
    content:
      "Instantly withdraw your funds to PayPal, Cash App, Venmo, Zelle, and more!",
  },
];

export const methodsInfo = [
  {
    id: 1,
    image: referral,
    title: "Clicks & Referrals",
    content:
      "Share your invite link with friends, family, and colleagues and receive $2 when they click it, and $15 for every sign up.",
  },
  {
    id: 2,
    image: survey,
    title: "Survey Tasks",
    content: "Earn Money when you answer fun surveys and polls.",
  },
  {
    id: 3,
    image: mobile,
    title: "App Tasks",
    content: "Earn Money for playing games and testing some free apps.",
  },
  {
    id: 4,
    image: quest,
    title: "Daily Quest",
    content:
      "Complete Daily Quests on our site and redeem Money for every completed quest.",
  },
  {
    id: 5,
    image: trophy,
    title: "Giveaway",
    content:
      "Enter the hourly giveaway to earn the money. The entry is free. All you have to do is join.",
  },
];
