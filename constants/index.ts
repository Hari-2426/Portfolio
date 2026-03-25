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
    link: "https://linkedin.com/in/cvhariharanandan",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/vedavyas2410",
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
    image: "/projects/project-1.png",
    github: "https://github.com/vedavyas2410",
    live: "#",
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
    image: "/projects/project-2.png",
    github: "https://github.com/vedavyas2410",
    live: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
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
