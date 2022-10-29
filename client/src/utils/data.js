import { FaGift, FaMousePointer, FaUserPlus } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { ImCheckmark } from "react-icons/im";
import { BiTime } from "react-icons/bi";

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
