import {
  FaGlobe,
  FaGoogle,
  FaWikipediaW,
  FaBook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";

const searchData = [
  {
    // 0
    name: "Web",
    color: "grape",
    link: "https://www.google.com/search?igu=1&q=",
    expression: "Default; No Expression",
    previewAllowed: true,
    width: 175,
    icon: <FaGlobe size={36} />,
  },
  {
    // 1
    name: "Google",
    color: "orange",
    link: "https://www.google.com/search?igu=1&q=",
    expression: '"g " OR "google "',
    previewAllowed: true,
    width: 200,
    icon: <FaGoogle size={36} />,
  },
  {
    // 2
    name: "Wikipedia",
    color: "cyan",
    link: "https://www.wikipedia.org/wiki/",
    expression: '"w " OR "wikipedia "',
    previewAllowed: true,
    width: 230,
    icon: <FaWikipediaW size={36} />,
  },
  {
    // 3
    name: "Dictionary",
    color: "teal",
    link: "https://www.dictionary.com/browse/",
    expression: '"d " OR "dictionary "',
    previewAllowed: true,
    width: 250,
    icon: <FaBook size={36} />,
  },
  {
    // 4
    name: "Thesaurus",
    color: "teal",
    link: "https://www.thesaurus.com/browse/",
    expression: '"t " OR "thesaurus "',
    previewAllowed: true,
    width: 250,
    icon: <FaBook size={36} />,
  },
  {
    // 5
    name: "Stack Overflow",
    color: "yellow",
    link: "https://stackoverflow.com/search?q=",
    expression: '"s " OR "stackoverflow "',
    previewAllowed: false,
    width: 290,
    icon: <FaStackOverflow size={36} />,
  },
  {
    // 6
    name: "Twitter",
    color: "blue",
    link: "https://twitter.com/search?q=",
    expression: '"tw " OR "twitter "',
    previewAllowed: false,
    width: 215,
    icon: <FaTwitter size={36} />,
  },
  {
    // 7
    name: "Instagram",
    color: "pink",
    link: "https://www.instagram.com/explore/search/keyword/?q=",
    expression: '"in " OR "instagram "',
    previewAllowed: false,
    width: 240,
    icon: <FaInstagram size={36} />,
  },
  {
    // 8
    name: "LinkedIn",
    color: "indigo",
    link: "https://www.linkedin.com/search/results/all/?keywords=",
    expression: '"li " OR "linkedin "',
    previewAllowed: false,
    width: 220,
    icon: <FaLinkedinIn size={36} />,
  },
];

export default searchData;