const pageLinks = [
  {
    id: 1,
    text: "home",
    path: "/home",
  },
  {
    id: 2,
    text: "how",
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
    path: "/about-us",
    submenu: [
      {
        id: 1,
        text: "about us",
        path: "/about-us",
      },
      {
        id: 2,
        text: "faq",
        path: "/faq",
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

export default pageLinks;
