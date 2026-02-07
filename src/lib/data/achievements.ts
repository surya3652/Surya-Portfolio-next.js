export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  category: string;
  icon?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Amazon ML Summer School Selection",
    description:
      "Selected for the prestigious Amazon ML Summer School Program, attending bootcamp delivered by Amazon Scientists on Machine Learning and Deep Learning.",
    year: "2023",
    category: "Education",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure AI Fundamentals",
    description:
      "Achieved Microsoft certification in Azure AI Fundamentals, demonstrating expertise in cloud-based AI solutions.",
    year: "2023",
    category: "Certification",
    icon: "🏆",
  },
  {
    id: 3,
    title: "Smart India Hackathon Participant",
    description:
      "Participated in Smart India Hackathon, one of India's largest hackathons, competing at college level.",
    year: "2023",
    category: "Competition",
    icon: "💻",
  },
  {
    id: 4,
    title: "HackerRank 5-Star Problem Solver",
    description:
      "Achieved 5-star badge in problem solving on HackerRank and 3-star rating on CodeChef with 400+ problems solved across platforms.",
    year: "2023",
    category: "Coding",
    icon: "⭐",
  },
  {
    id: 5,
    title: "Blackbucks AI/ML Course Completion",
    description:
      "Successfully completed comprehensive Artificial Intelligence and Machine Learning course offered by Blackbucks.",
    year: "2023",
    category: "Education",
    icon: "🎓",
  },
  {
    id: 6,
    title: "Cisco Cyber Security Essentials",
    description:
      "Completed Cyber Security Essentials course from Cisco Networking Academy, gaining foundational security knowledge.",
    year: "2023",
    category: "Certification",
    icon: "🔒",
  },
  {
    id: 7,
    title: "AWS Cloud Virtual Internship",
    description:
      "Successfully completed AWS Cloud Virtual Internship offered by AICTE - EduSkills, gaining hands-on cloud experience.",
    year: "2023",
    category: "Internship",
    icon: "☁️",
  },
  {
    id: 8,
    title: "Azura Technical Event Organizer",
    description:
      "Conducted technical quiz event for 60+ students, receiving Certificate of Appreciation from AZURA.",
    year: "2023",
    category: "Leadership",
    icon: "🎯",
  },
];

export const stats = [
  {
    id: 1,
    value: "400+",
    label: "Problems Solved",
  },
  {
    id: 2,
    value: "6+",
    label: "Projects Completed",
  },
  {
    id: 3,
    value: "5⭐",
    label: "HackerRank Rating",
  },
  {
    id: 4,
    value: "8+",
    label: "Certifications",
  },
];
