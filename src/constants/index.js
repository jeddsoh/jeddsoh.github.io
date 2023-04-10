import {
    backenddev,
    uxui,
    visual,
    frontend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    adobe,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    githublogo,
    oklahoma,
    affirm,
    frank,
    youversion,
    frankyou,
    portfolio,
    agentportal,
    prayer,
    warriors,
    threejs,
    webflow,
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
      title: "Front End Developer",
      icon: frontend,
    },
    {
      title: "Back End Developer",
      icon: backenddev,
    },
    {
      title: "UX/UI Designer",
      icon: uxui,
    },
    {
      title: "Visual Designer",
      icon: visual,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "githublogo",
      icon: githublogo,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Adobe",
      icon: adobe,
    },
    {
      name: "webflow",
      icon: webflow,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "UX/UI Designer",
      company_name: "Affirm",
      icon: affirm,
      iconBg: "#fff",
      date: "2022 • San Francisco (Remote)",
      points: [
        "Designed internal tooling to decrease servicing errors, improve the support agent experience, and lower customer frustration.",
        "This was a 6-month contract position to complete new internal software projects.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Frank – Digital Marketing Agency",
      icon: frank,
      iconBg: "#fff",
      date: "2022 • Oklahoma City",
      points: [
        "Designed, developed, and maintained websites sites for various clients.",
        "Led operations and introduced new processes and tools company-wide, such as Figma and Notion implementation.",
        "Migrated difficult Wordpress sites into client-friendly Webflow builds.",
      ],
    },
    {
      title: "Mobile Design Intern",
      company_name: "YouVersion (The Bible App)",
      icon: youversion,
      iconBg: "#fff",
      date: "2021 • Edmond, OK",
      points: [
        "Redesigned critical app features.",
        "Redesigned critical interactions within the app based on results from usability testing, increasing a major feature’s adoption by 141% (affecting 300,000+ daily users).",
        "Contributed to design ops and efforts in research, prototyping, usability testing, and design systems.",
        "Assisted in localization for 100+ languages, including many underserved languages, leading to increased accessibility.",
      ],
    },
    {
      title: "Web Designer",
      company_name: "University of Oklahoma",
      icon: oklahoma,
      iconBg: "#fff",
      date: "2016-2020 • Norman, OK",
      points: [
        "Produced web assets and visuals for the Department of Modern Languages.",
        "Developed front-end web interfaces.",
        "Unified department website to adhere to university web and branding standards.",
        "I also tutored Chinese.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Smart. Driven. Jedd is a researcher, a teammate, and a craftsman who delivers inspiring work.",
      name: "Andy K.",
      designation: "Principal Product Designer",
      company: "YouVersion",
      image: "https://play-lh.googleusercontent.com/03u7ovx5WUvmOWJDIxlNYaQY60hgcNzyRKQ5Bugex_zl-UXrxxXY4ROHEm179xly9OFr",
    },
    {
      testimonial:
        "Jedd is an excellent thought partner with the masterful ability to translate your thoughts to delightful concepts.",
      name: "Gamaliel O.",
      designation: "Product Manager",
      company: "Affirm",
      image: "https://site-images.similarcdn.com/url?url=https%3A%2F%2Fplay-lh.googleusercontent.com%2FPKjUYM6dvs8MBevibaaTlvrdBu3zFGS2eKx0ggGi7aXvrhiq_Ee-CxZyJVO0FRiCwm8G&h=910789bfaf89ecb1104c8da1939067dd91c42b348596d1fdf49eb98a75e011db",
    },
    {
      testimonial:
        "No matter the task, Jedd always goes the extra step. I’m confident that any team he joins will benefit.",
      name: "Sahithi B.",
      designation: "Software Engineer",
      company: "Microsoft",
      image: "https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277",
    },
  ];
  
  const projects = [
    {
      name: "My Portfolio",
      description:
        "I built this site with React. I used ThreeJS for 3D visuals. I also used Framer Motion for animation and TailwindC for styling.",
      tags: [
        {
          name: "React Development",
          color: "cyan-text-gradient",
        },
      ],
      image: portfolio,
      link_name: "View code on GitHub",
      source_code_link: "https://github.com/jeddsoh/jeddsoh.github.io/",
    },
    {
      name: "Warriors for Freedom",
      description:
        "I built a new website for Warriors for Freedom, a nonprofit with the goal of preventing suicide among military veterans.",
      tags: [
        {
          name: "Webflow Development",
          color: "cyan-text-gradient",
        },
      ],
      image: warriors,
      link_name: "View website",
      source_code_link: "https://www.warriorsforfreedom.org/",
    },
    {
      name: "Frank Marketing Agency",
      description:
        "I designed mobile app features to help users access prayer more easily, manage their prayers better, and focus better.",
      tags: [
        {
          name: "Webflow Development",
          color: "cyan-text-gradient",
        },
      ],
      image: frankyou,
      link_name: "View website",
      source_code_link: "https://www.frankyou.com/",
    },
    {
      name: "Affirm",
      description:
        "I designed new internal tooling to help Affirm support agents manage customers more efficiently.",
      tags: [
        {
          name: "Product Design",
          color: "cyan-text-gradient",
        },
      ],
      image: agentportal,
      link_name: "View designs",
      source_code_link: "https://www.affirm.com/",
    },
    {
      name: "YouVersion Prayer",
      description:
        "I designed mobile app features for the Bible App to let users better manage and focus on their prayers.",
      tags: [
        {
          name: "Product Design",
          color: "cyan-text-gradient",
        },
      ],
      image: prayer,
      link_name: "View designs",
      source_code_link: "https://www.youversion.church/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };