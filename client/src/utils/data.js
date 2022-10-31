import {
  FaFacebook,
  FaFacebookMessenger,
  FaGift,
  FaGuilded,
  FaInstagram,
  FaMobile,
  FaMousePointer,
  FaPinterest,
  FaShareSquare,
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
        path: "/referralguide",
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
