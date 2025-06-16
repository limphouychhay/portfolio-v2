import {
  FigmaLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";

export const DATA = {
  name: "Lim Phouychhay",
  position: "Senior Mobile Engineer",
  social: [
    {
      icon: GitHubLogoIcon,
      href: "https://github.com/limphouychhay/limphouychhay",
      color: "hover:text-slate-200",
    },
    {
      icon: LinkedInLogoIcon,
      href: "https://www.linkedin.com/in/lim-phouychhay-562b73207/",
      color: "hover:text-blue-400",
    },
    {
      icon: FigmaLogoIcon,
      href: "URL_ADDRESS.figma.com/@limphouychhay",
      color: "hover:text-teal-400",
    },
    {
      icon: MailIcon,
      href: "mailto:limphouychhay@gmail.com",
      color: "hover:text-pink-400",
    },
  ],
  skill: [
    { id: 1, skill: "Flutter", level: 100, color: "pink-400" },
    { id: 2, skill: "React Native", level: 90, color: "pink-400" },
    { id: 3, skill: "Nest.js", level: 80, color: "pink-400" },
    { id: 4, skill: "Node.js", level: 80, color: "pink-400" },
    { id: 5, skill: "Express.js", level: 80, color: "pink-400" },
    { id: 6, skill: "Next.js", level: 80, color: "pink-400" },
    { id: 7, skill: "Firebase", level: 80, color: "pink-400" },
    { id: 8, skill: "Docker", level: 80, color: "pink-400" },
  ],
  experience: [
    {
      period: "2023 — Present",
      title: "Senior Engineer, Frontend Development",
      company: "Cellcard",
      description:
        "A senior technical position leading the transformation of Cellcard's mobile application ecosystem, focusing on migrating the app from React Native to Flutter while maintaining high-quality delivery and backend services. The role combines technical expertise in mobile development, Node.js/serverless architecture, and CI/CD pipeline management with leadership responsibilities, guiding junior developers and ensuring coding standards are met across the team.",
      technologies: ["Flutter", "Dart", "Node.js", "Typescript"],
      link: "https://www.cellcard.com.kh/en",
    },
    {
      period: "2022 — 2023",
      title: "Frontend Developer",
      company: "Cellcard",
      description:
        "A technical position focused on developing and transforming the Cellcard mobile application, specifically responsible for maintaining the current app while planning its migration from React Native to Flutter. The role emphasizes enhancing user experience, improving app ratings, and supporting commercial objectives through feature improvements and redesign efforts.",
      technologies: ["React Native", "JavaScript", "TypeScript"],
      link: "https://www.cellcard.com.kh/en",
    },
    {
      period: "2021 — 2022",
      title: "Mobile Developer",
      company: "SISKH",
      description:
        "A technical position focused on Flutter mobile application development, combining development, testing, and deployment responsibilities. The role involves creating new Flutter applications while enhancing existing projects, conducting comprehensive testing, analyzing UI requirements, and managing the complete app publishing process across both major app stores.",
      technologies: ["Flutter", "Dart"],
      link: "https://siskh.com/",
    },
    {
      period: "2020 — 2022",
      title: "Junior Technical Consultant",
      company: "Cloudlogic Asia",
      description:
        "A technical position focused on implementing and managing Microsoft 365 and Dynamics 365 Business Central solutions, combining consulting, administration, and training responsibilities. The role involves providing licensing guidance, administering Microsoft 365 tenant environments, and delivering comprehensive training and support services to ensure successful platform adoption and utilization.",
      technologies: ["Flutter", "Dart"],
      link: "https://siskh.com/",
    },
  ],
  project: [
    {
      title: "Cellcard App",
      description:
        "The Cellcard App is a mobile application by Cellcard, one of Cambodia's leading telecom providers. It allows users to easily manage their mobile accounts, check balances, top up, buy plans, access promotions, and monitor data usage—all from one convenient platform. The app also offers rewards, customer support, and account settings for a seamless user experience.",
      technologies: ["Flutter", "Dart", "Node.js", "Typescript", "MySQL"],
      image:
        "https://res.cloudinary.com/dvu2n6h0g/image/upload/b_rgb:F9A01B/v1748315294/cellcard-app-logo_bnkljx.png",
      link: "https://www.cellcard.com.kh/kh/my-cellcard/",
    },
    {
      title: "PethStrey App",
      description:
        "The PethStrey app is a women's health platform in Cambodia offering anonymous doctor consultations, period tracking, and access to health products—empowering users with private, culturally sensitive care.",
      technologies: [
        "Flutter",
        "Dart",
        "Nest.js",
        "Typescript",
        "MySQL",
        "TypeOrm",
      ],
      image:
        "https://res.cloudinary.com/dvu2n6h0g/image/upload/v1748315294/pethstrey-app-logo_hwl0bo.png",
      link: "https://pethstrey.info/",
    },
    {
      title: "Ketluy Reporting App",
      description:
        "Ketluy Report is a companion mobile application designed to work with the Ketluy POS system. It allows business owners and managers to remotely access key sales data and performance metrics directly from their smartphones.",
      technologies: ["Flutter", "Dart", "Laravel", "PHP"],
      image:
        "https://res.cloudinary.com/dvu2n6h0g/image/upload/v1748315294/ketluy-app-logo_elbqbj.png",
      link: "https://ketluy.asia/",
    },
    {
      title: "Facility Management System App",
      description:
        "The Facility Management System helps property managers handle maintenance requests, track tasks, and communicate with tenants efficiently—all from a mobile-friendly platform.",
      technologies: ["Flutter", "Dart", "Laravel", "PHP"],
      image:
        "https://res.cloudinary.com/dvu2n6h0g/image/upload/v1748315294/fms-app-logo_joux3a.jpg",
      link: "https://siskh.com/solution-delivery/",
    },
  ],
};
