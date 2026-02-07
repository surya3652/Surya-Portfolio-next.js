export interface Skill {
  id: number;
  skill: string;
  percentage: number;
  category: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const skills: Skill[] = [
  {
    id: 1,
    skill: "React.js & Next.js",
    percentage: 92,
    category: "Frontend",
  },
  {
    id: 2,
    skill: "Vue.js & Angular",
    percentage: 88,
    category: "Frontend",
  },
  {
    id: 3,
    skill: "Node.js & Express",
    percentage: 85,
    category: "Backend",
  },
  {
    id: 4,
    skill: "Python & Flask",
    percentage: 80,
    category: "Backend",
  },
  {
    id: 5,
    skill: "TypeScript",
    percentage: 90,
    category: "Programming",
  },
  {
    id: 6,
    skill: "Machine Learning",
    percentage: 75,
    category: "AI/ML",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "XYZ Solutions PVT Ltd.",
    role: "Associate Software Engineer",
    duration: "Present",
    location: "Remote",
    description: [
      "Developed makeup artist booking app using Ionic Framework with core features like deep linking, lazy loading, and API integrations",
      "Delivered 5+ AI-driven content generation features for customer journey management platform",
      "Implemented custom query logic with Doctrine ORM for dynamic content outputs",
      "Optimized application performance and user experience across web and mobile platforms",
    ],
    technologies: [
      "Vue.js",
      "Angular.js",
      "Ionic",
      "Symfony",
      "MySQL",
      "Capacitor",
    ],
  },
  {
    id: 2,
    company: "Amazon ML Summer School",
    role: "Apprentice",
    duration: "2023",
    location: "Online",
    description: [
      "Selected for prestigious Amazon ML Summer School Program",
      "Attended intensive bootcamp delivered by Amazon Scientists",
      "Gained expertise in Machine Learning and Deep Learning domains",
      "Collaborated with peers on real-world ML challenges",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
    ],
  },
];

export const technicalSkills = {
  "Programming Languages": ["C/C++", "Python", "Java", "Core PHP"],
  "Web Technologies": [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "Node.js",
  ],
  "Frameworks/Libraries": [
    "Vue.js",
    "Angular.js",
    "React.js",
    "React Native",
    "Symfony",
    "Laravel",
    "Ionic",
    "Flask",
  ],
  "Developer Tools": [
    "npm",
    "Composer",
    "Git",
    "GitHub",
    "VS Code",
    "PyCharm",
    "IntelliJ",
    "Postman",
  ],
  "AI Tools": ["GitHub Copilot", "OpenAI", "Gemini AI"],
  Databases: ["MySQL", "MongoDB"],
};
