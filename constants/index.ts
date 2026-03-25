import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const LANGUAGES = [
  { skill_name: "Java", image: "java.svg" },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "SQL", image: "sql.svg" },
] as const;

export const FRONTEND = [
  { skill_name: "React.js", image: "react.png" },
  { skill_name: "HTML", image: "html.png" },
  { skill_name: "CSS", image: "css.png" },
] as const;

export const BACKEND = [
  { skill_name: "MySQL", image: "mysql.png" },
  { skill_name: "Hibernate", image: "hibernate.svg" },
  { skill_name: "JDBC", image: "" },
] as const;

export const CONCEPTS = [
  { skill_name: "Machine Learning", image: "" },
  { skill_name: "Data Structures", image: "" },
  { skill_name: "OOP", image: "" },
  { skill_name: "REST APIs", image: "" },
] as const;

export const TOOLS = [
  { skill_name: "Git", image: "" },
  { skill_name: "Eclipse", image: "" },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/hari-hara-nandan-cv-608240354",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Hari-2426/",
  },
] as const;

export const PROJECTS = [
  {
    title: "AgriTech Smart Farming Platform",
    description: [
      "Built a platform for data-driven crop insights",
      "Integrated ML models for predictive recommendations",
      "Enabled real-time agricultural decision-making"
    ],
    highlight: "🏆 Won 1st Place at National-Level Hackathon among 100+ teams",
    tech: ["React", "JavaScript", "Machine Learning", "Random Forest", "Linear Regression"],
    image: "/projects/agri-image.webp",
    github: "https://github.com/Hari-2426/",
    live: "https://smart-farming-rgm.vercel.app/",
  },
  {
    title: "Thomas Travels — Driver Management System",
    description: [
      "Built modular driver management system",
      "Implemented efficient search using Java Collections",
      "Developed analytics to track driver performance"
    ],
    highlight: "",
    tech: ["Java", "OOP", "JDBC", "MySQL"],
    image: "/projects/thomas-travels.png",
    github: "https://github.com/Hari-2426/Java-Travels-Mini-Project/tree/master",
    live: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/hari-hara-nandan-cv-608240354",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Hari-2426/",
      },
    ],
  },
  {
    title: "Contact & About",
    data: [
      {
        name: "vedavyas2410@gmail.com",
        icon: null,
        link: "mailto:vedavyas2410@gmail.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "#contact",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
