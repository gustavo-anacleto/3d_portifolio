import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  tailwind,
  mongodb,
  git,
  docker,
  bosch,
  driveB,
  dotnet,
  csharp,
  angular,
  spring,
  azure,
  azureDevops,
  java,
  postgreSql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    id:'frontend-developer',
    title:"Front End Developer",
    icon: web,
  },
  {
    title:"Back End Developer",
    id:'backend-developer',
    icon: backend,
  },
  {
    title: "SQL",
    icon: mobile,
  },
  {
    title: "Azure",
    icon: creator,
  },
];

const workedTime = new Date().getFullYear() - 2021;

const technologies = [
  {
    name: "Java",
    icon: java,
    workedTime: workedTime,
  },
  {
    name: "Spring",
    icon: spring,
    workedTime: workedTime,
  },
  {
    name: "C#",
    icon: csharp,
    workedTime: workedTime,
  },
  {
    name: ".NET Framework",
    icon: dotnet,
    workedTime: workedTime,
  },
  {
    name: "TypeScript",
    icon: typescript,
    workedTime: workedTime,
  },
  {
    name: "Angular",
    icon: angular,
    workedTime: workedTime,
  },
  {
    name: "React JS",
    icon: reactjs,
    workedTime: workedTime,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    workedTime: workedTime - 2,
  },
  {
    name: "Postgre Sql",
    icon: postgreSql,
    workedTime: workedTime,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    workedTime: workedTime,
  },
  {
    name: "git",
    icon: git,
    workedTime: workedTime,
  },
  {
    name: "Docker",
    icon: docker,
    workedTime: workedTime - 1 ,
  },
  {
    name: "Azure",
    icon: azure,
    workedTime: workedTime - 1,
  },
  {
    name: "Azure Devops",
    icon: azureDevops,
    workedTime: workedTime - 1,
  },
];

const experiences = [
  {
    id:'exp-1',
    title: "Half Digital Solutions",
    company_name: "Bosch",
    icon: bosch,
    iconBg: "#383E56",
    date: "Feb 2023 - Dec 2024",
    points: [
      "Studying and developing personal projects to improve my technical knowledge",
      "Learning advanced contents in C#, .NET Framework and Entity Framework, OData",
    ],
  },
  {
    id:'exp-2',
    title: "Full Stack Developer",
    company_name: "Bosch",
    icon: bosch,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Current Role",
    points: [
      "Developing and maintaining web applications using Java and Angular as main technologies.",
      "Working with microsservices archtecture in back-end(Java Spring Boot) and front-end(SPA), using Azure Service Bus to management data between microsservices.",
      "Using PostgreeSQL to management data of applications.",
      "Making Authentication and Authorization process and user management with Keycloak.",
      "Implementing CI/CD to meet project demands with more agility and efficiency.",
      "Organizing application infrastructure and managing development squads with Azure and AzureDevOps.",
      "Construct REST APIs.",
      "Applying some design patterns improve software scalability like Factory, Builder, Strategy.",
      "Improving software integrity with Unit Test, working with TDD methodology",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Drive B",
    description:
      "DriveB fleet is a digital solution that aims to facilitate fleet management and preventive and corrective maintenance of your vehicles. Through an online platform and application, DriveB connects managers, drivers and workshops and optimizes their administrative and operational processes.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "blue-text-gradient",
      },
    ],
    image: driveB,
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
