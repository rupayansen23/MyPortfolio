export const profile = {
  name: "Rupayan Sen",
  image: "/rupayan2.png",
  role: "Freelance Web Developer",
  location: "Kolkata, West Bengal, India",
  email: "rupayansen23@gmail.com",
  github: "https://github.com/rupayansen23",
  site: "https://www.rupayan.info/",
  resume: "./Rupayan_Sen_Resume.docx",
  socials: [
    { name: "Facebook", short: "f", url: "https://www.facebook.com/profile.php?id=61581518945525" },
    { name: "WhatsApp", short: "wa", url: "https://wa.me/" },
    { name: "Threads", short: "@", url: "https://www.threads.com/@code_coffee_cars" },
    { name: "Instagram", short: "ig", url: "https://www.instagram.com/code_coffee_cars/" },
    { name: "X", short: "𝕏", url: "https://x.com/rupayan_sen_23" },
    { name: "Discord", short: "dc", url: "https://discord.com/" },
  ],
  summary:
    "I’m a freelance web developer who helps businesses, founders, and teams turn ideas into fast, polished, and reliable web products. I build responsive frontend experiences with React and TypeScript, develop secure REST APIs with Node.js and Express, and connect them to well-structured databases. From planning and UI implementation to deployment and ongoing improvements, I care about clean code, thoughtful user experiences, and solutions that are easy to maintain and grow.",
  seeking:
    "I help businesses and teams build polished, scalable web products from idea to launch.",
};

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL"] },
  { group: "Infra & Tools", items: ["MongoDB", "Kubernetes", "Docker", "Git"] },
];

export const experience = [
  {
    title: "Freelance Full Stack Web Developer — Travel Booking Platform",
    period: "Sep 2026 – Present",
    meta: "Freelance / Client Project (ongoing)",
    stack: ["Next.js", "React", "Node.js/Express", "PostgreSQL", "Prisma ORM", "REST APIs", "Git/GitHub"],
    points: [
      "Building a full-stack travel booking platform end to end: Next.js/React frontend, Express.js REST APIs, and a PostgreSQL database managed with Prisma ORM.",
      "Implementing authentication and authorization, booking business logic, and API validation and error handling, with a responsive UI for browsing destinations and booking trips.",
    ],
  },
];

export const projects = [
  {
    name: "Clash of Code",
    github: "https://github.com/rupayansen23/Clash-Of-Code",
    live: "https://www.rupayan.info/",
    preview: "code",
    previewLabel: "FULL-STACK / 01",
    tagline: "Full-stack competitive programming platform",
    stack: ["React", "Redux Toolkit", "Node.js/Express", "MongoDB", "Redis", "Cloudinary", "Tailwind CSS", "Gemini API"],
    points: [
      "Engineered a LeetCode-style platform supporting C++, Java, JavaScript and Python, with a multi-language code editor and end-to-end problem and test-case management.",
      "Integrated the Judge0 API for automated compilation and batch test-case evaluation of concurrent submissions, with rate limiting on the submission endpoint to protect execution infrastructure.",
      "Implemented JWT-based authentication with Zod validation and React Hook Form; diagnosed and resolved Redux auth-state issues affecting post-registration navigation.",
      "Standardized Express.js API responses and implemented client-side routing with React Router.",
      "Integrated Cloudinary's video API for video solutions, plus an LLM-powered chatbot that gives contextual hints while users solve problems.",
    ],
    featured: true,
  },
  {
    name: "BookLovers",
    github: "https://github.com/rupayansen23/Bookloversa",
    live: "https://www.rupayan.info/",
    preview: "books",
    previewLabel: "COMMERCE / 02",
    tagline: "Online bookstore",
    stack: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Gemini API", "Cloudinary"],
    points: [
      "Developed REST APIs with Express.js and MongoDB for catalog management, cart operations and user authentication, with React Router across catalog, search and account pages.",
      "Built a personalized recommendation system in JavaScript that suggests books from user preferences and activity.",
      "Integrated the Google Gemini API for natural-language book search and automatic summary generation; used Cloudinary for cover-image storage and delivery.",
    ],
  },
  {
    name: "Swiggy Clone",
    github: "",
    live: "https://github.com/rupayansen23/Food-Order-App-",
    preview: "food",
    previewLabel: "FRONTEND / 03",
    tagline: "Food delivery UI",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    points: [
      "Built a food delivery UI using Swiggy's API for live restaurant data, with Redux for centralized cart state and shimmer loading effects to improve perceived performance.",
    ],
  },
];

export const education = [
  { school: "RCC Institute of Information Technology", degree: "MCA — Master of Computer Applications", period: "2024 – 2026" },
  { school: "The University of Burdwan", degree: "BCA — Bachelor of Computer Applications", period: "2021 – 2024" },
];

export const certifications = [
  { name: "Database Management System", issuer: "NPTEL (IIT Kharagpur)", detail: "Elite · Jul–Sep 2025" },
];
