import.meta.glob("../assets/**/*.png", { eager: true });

import campaignImage from "../assets/campaign/2.png";
import campaignGrid1 from "../assets/campaign/1.png";
import campaignGrid4 from "../assets/campaign/her.png";
import venturevillasImage from "../assets/venturevillas/VV.png";
import venturevillasGrid3 from "../assets/venturevillas/VV4.png";
import venturevillasGrid4 from "../assets/venturevillas/vv5.png";
import comicreviewboardsImage from "../assets/comicreviewboards/CRB.png";
import comicreviewboardsGrid1 from "../assets/comicreviewboards/CRB2.png";
import comicreviewboardsGrid2 from "../assets/comicreviewboards/CRB3.png"; 
import dramalogo from "../assets/drama/dramalogo.png";
import dramaimage from "../assets/drama/drama.png";
import dramaGrid1 from "../assets/drama/drama-1.png";
import dramaGrid2 from "../assets/drama/drama-2.png";
import dramaGrid3 from "../assets/drama/drama-3.png"; 


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
  name: "Drama",
  firstname: "Drama",
  lastname: "",
  keywords: ["Movies", "Games", "Collaboration"],
  skills: ["Django", "Docker", "REST API"],
  description:
    "A collaborative web app that helps couples, families, and friends decide on movies through fun, competitive mini-games.",
  month: "JULY",
  year: "2025",
  details:
    "Drama lets users sign up, invite known friends, search for films via a public movie API (title, genre, randomizer, AI suggestions), and then play micro-games—like tap-the-most or shake-the-most in 5 seconds—to determine the final movie choice.",
  socials: {
    github: {
      name: "Github",
      link: "https://github.com/cdenzelcoleman/drama",
    },
  },
  image: dramaimage,
  hero: dramalogo,
  gridImages: [
    dramaGrid1,
    dramaGrid2,
    dramaGrid3,
  ],
  popup: "/assets/hairxyou-popup.png",
  liveDemo: 'https://drama-71f6e75e63a6.herokuapp.com/movies/',
},
  {
    id: 3,
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
    id: 4,
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
  
];

export default projectsData;
