// src/utils/data.js

// Eagerly load all PNG assets from the assets folder (optional)
import.meta.glob("../assets/**/*.png", { eager: true });

// Import campaign images explicitly so that Vite bundles them
import campaignImage from "../assets/campaign/2.png";
import campaignGrid1 from "../assets/campaign/1.png";
import campaignGrid2 from "../assets/campaign/C.png";
import campaignGrid3 from "../assets/campaign/C2.png";
import campaignGrid4 from "../assets/campaign/her.png";
import campaignGrid5 from "../assets/campaign/NC.png";
import venturevillasImage from "../assets/venturevillas/VV.png";
import venturevillasGrid1 from "../assets/venturevillas/VV2.png";
import venturevillasGrid2 from "../assets/venturevillas/VV3.png";
import venturevillasGrid3 from "../assets/venturevillas/VV4.png";
import venturevillasGrid4 from "../assets/venturevillas/VV5.png";
import comicreviewboardsImage from "../assets/comicreviewboards/CRB.png";
import comicreviewboardsGrid1 from "../assets/comicreviewboards/CRB2.png";
import comicreviewboardsGrid2 from "../assets/comicreviewboards/CRB3.png";
import comicreviewboardsGrid3 from "../assets/comicreviewboards/CRB6.png";
import comicreviewboardsGrid4 from "../assets/comicreviewboards/CRB10.png";


const projectsData = [
  {
    id: 1,
    name: "The Campaign",
    firstname: "Campaign",
    lastname: "",
    keywords: ["AI RPG", "Fantasy", "Campaign Manager"],
    skills: ["React", "Node.js", "OpenAI API"],
    description:
      "A fantasy RPG campaign manager and AI narrative generator designed to enhance storytelling and gameplay.",
    month: "NOVEMBER",
    year: "2024",
    details:
      "The Campaign is a full-stack application that integrates AI to generate dynamic narratives for fantasy RPG campaigns.",
    socials: {
      github: {
        name: "Github",
        link: "https://github.com/cdenzelcoleman/the-campaign",
      },
    },
    image: campaignImage,
    hero: campaignImage,
    gridImages: [
      campaignGrid1,
      campaignGrid4,
    ],
    popup: campaignImage,
    liveDemo: "https://thecampaign-88f02c968441.herokuapp.com/",
  },
  {
    id: 2,
    name: "Venture Villas",
    firstname: "Venture",
    lastname: "Villas",
    keywords: ["Resort", "Hospitality", "Luxury"],
    skills: ["Django", "React", "UI/UX Design"],
    description:
      "A resort website for Venture Villas, showcasing luxury accommodations and services in an immersive digital experience.",
    month: "OCTOBER",
    year: "2024",
    details:
      "Venture Villas is a multi-page website developed to offer a seamless booking and browsing experience for resort guests.",
    image: venturevillasImage,
    hero: venturevillasImage,
    gridImages: [
      venturevillasGrid3,
      venturevillasGrid4,
    ],
    popup: "/assets/venture-villas-popup.png",
    liveDemo: "https://venture-villas-dfc403d3632f.herokuapp.com/",
  },
  {
    id: 3,
    name: "Comic Review Boards",
    firstname: "Comic",
    lastname: "Review Boards",
    keywords: ["Comics", "Reviews", "Community"],
    skills: ["React", "Node.js", "Express"],
    description:
      "A comic book review site that brings enthusiasts together to discuss, review, and share their favorite comics.",
    month: "SEPTEMBER",
    year: "2024",
    details:
      "Comic Review Boards is designed as a platform for comic lovers to explore reviews, ratings, and discussions in an engaging format.",
    image: comicreviewboardsImage,
    hero: comicreviewboardsImage,
    gridImages: [
      comicreviewboardsGrid1,
      comicreviewboardsGrid2,
    ],
    popup: "/assets/comic-review-boards-popup.png",
    liveDemo: "https://comicreviewboards-1b3201cae838.herokuapp.com/",
  },
  {
    id: 4,
    name: "hairxyou",
    firstname: "hairxyou",
    lastname: "",
    keywords: ["Simulation", "Casual", "Gaming"],
    skills: ["React Native", "React", "JavaScript"],
    description:
      "A casual simulation game that lets players experiment with different hairstyles and creative looks in a fun, interactive environment.",
    month: "AUGUST",
    year: "2024",
    details:
      "hairxyou is built to provide a playful and interactive experience where users can simulate and experiment with various hair styles and trends.",
    socials: {
      github: {
        name: "Github",
        link: "https://github.com/cdenzelcoleman/hairxyou",
      },
    },
    image: "/assets/hairxyou.png",
    hero: "/assets/hairxyou-hero.png",
    gridImages: [
      "/assets/hairxyou-1.png",
      "/assets/hairxyou-2.png",
      "/assets/hairxyou-3.png",
    ],
    popup: "/assets/hairxyou-popup.png",
  },
];

export default projectsData;
