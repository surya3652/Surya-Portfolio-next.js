export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Customer Journey Management Platform",
    description:
      "Enterprise web application with 5+ AI-driven content generation features including map descriptions, episodes, touchpoints, and persona generation. Built with modern Vue.js architecture and custom query logic for dynamic outputs.",
    image: "https://placehold.co/800x1166",
    category: "Web Development",
    tags: ["Vue.js", "Symfony", "MySQL", "Doctrine ORM", "AI Integration"],
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Makeup Artist Booking App",
    description:
      "Cross-platform mobile application with deep linking, lazy loading, and optimized API integrations. Implemented core features to enhance performance and user experience using Ionic Framework.",
    image: "https://placehold.co/800x775",
    category: "Mobile Development",
    tags: ["Ionic", "Capacitor", "Angular.js", "TypeScript"],
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Student Manager",
    description:
      "Full-stack MERN application for managing student data with secure authentication, user registration, and comprehensive CRUD operations. Features RESTful API design and responsive UI.",
    image: "https://placehold.co/800x1166",
    category: "Web Development",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Heart Care Taker",
    description:
      "ML-powered web application for heart disease prediction with interactive data visualizations. Features 5+ visualization types to help users understand heart health metrics and risk factors.",
    image: "https://placehold.co/800x775",
    category: "Machine Learning",
    tags: [
      "Python",
      "Flask",
      "Machine Learning",
      "Bootstrap",
      "Data Visualization",
    ],
    githubUrl: "#",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with payment integration, inventory management, and real-time analytics. Built with scalable architecture and optimized for performance.",
    image: "https://placehold.co/800x1166",
    category: "Web Development",
    tags: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    demoUrl: "#",
  },
  {
    id: 6,
    title: "Task Management Dashboard",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Supports multiple project workflows.",
    image: "https://placehold.co/800x775",
    category: "Web Development",
    tags: ["Vue.js", "Laravel", "WebSocket", "MySQL"],
    githubUrl: "#",
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Machine Learning",
];
