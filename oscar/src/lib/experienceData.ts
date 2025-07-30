export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "lead-data-scientist",
    title: "Lead Data Scientist",
    company: "GDSC JKUAT Chapter",
    period: "September 2022 - Present",
    badge: {
      text: "Current",
      variant: "default",
    },
    description: [
      "Coordinated weekly Data Science track meetups reaching 15+ students",
      "Organized multiple hackathons focused on Data Science and AI",
      "Conducted instructional sessions on machine learning and data science",
      "Substantially elevated club engagement through innovative programming",
    ],
  },
  {
    id: "chatbot-developer",
    title: "Chatbot Developer",
    company: "Palladium",
    period: "April 2023 - May 2023",
    badge: {
      text: "2nd Runner-up",
      variant: "secondary",
    },
    description: [
      "Developed AI-powered chatbot for people living with AIDS on Nishauri platform",
      "Successfully deployed across WhatsApp, Telegram, and web applications",
      "Implemented advanced NLU capabilities for healthcare interactions",
      "Achieved second runner-up position in competitive assessment",
    ],
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    company: "Medium & Stackademic",
    period: "February 2024 - Present",
    description: [
      "Authored 5 comprehensive technical articles on AI, ML, and software development",
      "Featured in Stackademic, a prominent technical publication platform",
      "Garnered 73+ total engagements across published content",
      "Bridged theory and real-world implementation for global developer audience",
    ],
  },
  {
    id: "chatbot-developer2",
    title: "Chatbot Developer",
    company: "Palladium",
    period: "April 2023 - May 2023",
    badge: {
      text: "2nd Runner-up",
      variant: "secondary",
    },
    description: [
      "Developed AI-powered chatbot for people living with AIDS on Nishauri platform",
      "Successfully deployed across WhatsApp, Telegram, and web applications",
      "Implemented advanced NLU capabilities for healthcare interactions",
      "Achieved second runner-up position in competitive assessment",
    ],
  },
];
