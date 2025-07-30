import { Zap, Globe, Users, ExternalLink, Github } from "lucide-react";

export interface ProjectLink {
  text: string;
  href: string;
  icon: "external" | "github";
  variant?: "default" | "outline";
}

export interface ProjectMetric {
  label: string;
  value: string;
  color?: string;
}

export interface ProjectBadge {
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  badge: ProjectBadge;
  technologies: string[];
  links: ProjectLink[];
  metrics?: ProjectMetric[];
  features?: string[];
  imageUrl?: string;
  layout?: "default" | "reversed";
  terminalDemo?: {
    commands: string[];
    output: string[];
  };
  stats?: {
    label: string;
    value: string;
    subtitle?: string;
  }[];
  performanceMetrics?: {
    label: string;
    value: string;
    percentage: number;
    color: string;
  }[];
  visualElements?: {
    type: "image" | "stats" | "performance" | "gradient";
    content: any;
  }[];
}

export const projects: Project[] = [
  {
    id: "feynmanai",
    title: "FeynmanAI",
    subtitle: "Command-line RAG Tool",
    description:
      "Robust command-line tool leveraging Retrieval-Augmented Generation for document interaction with multi-format support (PDF, TXT, PPT, DOCX) and text-to-speech functionality. Features interactive query system and quiz mode for knowledge reinforcement.",
    icon: Zap,
    badge: {
      text: "🏆 Published on PyPI",
      className: "bg-emerald-100 text-emerald-800",
    },
    technologies: ["Python", "RAG", "PyPI", "NLP", "CLI"],
    links: [
      {
        text: "View on PyPI",
        href: "https://pypi.org/project/feynmanai/",
        icon: "external",
        variant: "default",
      },
      {
        text: "Source Code",
        href: "https://github.com/Oscar066",
        icon: "github",
        variant: "outline",
      },
    ],
    terminalDemo: {
      commands: [
        "# Install FeynmanAI",
        "$ pip install feynmanai",
        "# Interactive document query",
        "$ feynman --file document.pdf",
        "Query: What is machine learning?",
      ],
      output: [
        "Loading document...",
        "Ready for queries!",
        "🤖 Machine learning is a subset of AI...",
      ],
    },
    stats: [
      { label: "File Formats", value: "5+", subtitle: "Supported formats" },
      { label: "Downloads", value: "1K+", subtitle: "PyPI downloads" },
    ],
  },
  {
    id: "cubesat",
    title: "CubeSat Image Classification",
    subtitle: "Space Technology Innovation",
    description:
      "Ultra-compact ML model for satellite image classification under extreme bandwidth constraints. Developed Sequential CNN with depthwise separable convolutions, achieving 0.03 MB model size through advanced optimization techniques including TensorFlow TMOT pruning and quantization.",
    icon: Globe,
    badge: {
      text: "🥇 1st Place Winner",
      className: "bg-yellow-100 text-yellow-800",
    },
    technologies: ["TensorFlow", "CNN", "Model Optimization", "Space Tech"],
    links: [
      {
        text: "View Code",
        href: "https://github.com/Oscar066",
        icon: "github",
        variant: "default",
      },
      {
        text: "Live Demo",
        href: "#",
        icon: "external",
        variant: "outline",
      },
    ],
    layout: "reversed",
    performanceMetrics: [
      {
        label: "Model Accuracy",
        value: "94.2%",
        percentage: 94.2,
        color: "bg-emerald-600",
      },
      {
        label: "Size Reduction",
        value: "99.7%",
        percentage: 99.7,
        color: "bg-blue-600",
      },
    ],
    visualElements: [
      {
        type: "gradient",
        content: {
          from: "from-blue-900",
          to: "to-purple-900",
          elements: [
            {
              type: "image",
              src: "/placeholder.svg?height=200&width=300",
              alt: "CubeSat in orbit",
              className: "w-full h-48 object-cover rounded-lg mb-4",
            },
            {
              type: "text",
              content: "CubeSat Image Classification in Orbit",
              className: "text-white text-sm",
            },
          ],
        },
      },
    ],
  },
  {
    id: "pata-mchumba",
    title: "Pata Mchumba",
    subtitle: "Dating Recommender System",
    description:
      "Advanced hybrid recommender system moving beyond superficial matching to language-based compatibility. Integrated matching functions with sigmoid similarity algorithms for sophisticated user pairing, collaborating with Kenyan dating company to enhance user experience.",
    icon: Users,
    badge: {
      text: "💝 Social Impact",
      className: "bg-pink-100 text-pink-800",
    },
    technologies: [
      "Python",
      "Machine Learning",
      "Recommendation Systems",
      "NLP",
    ],
    links: [
      {
        text: "View Code",
        href: "https://github.com/Oscar066",
        icon: "github",
        variant: "default",
      },
      {
        text: "Case Study",
        href: "#",
        icon: "external",
        variant: "outline",
      },
    ],
    features: [
      "Language-based compatibility matching",
      "Sigmoid similarity algorithms",
      "Real-time recommendation engine",
      "User behavior analytics",
    ],
    visualElements: [
      {
        type: "gradient",
        content: {
          from: "from-pink-50",
          to: "to-purple-50",
          elements: [
            {
              type: "image",
              src: "/placeholder.svg?height=150&width=250",
              alt: "Dating App Interface",
              className: "w-full h-32 object-cover rounded-lg mb-3",
            },
            {
              type: "text",
              content: "Matching Algorithm Visualization",
              className: "text-sm text-gray-600",
            },
          ],
        },
      },
    ],
  },
];

export interface SmallProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge: ProjectBadge;
  technologies: string[];
  link: ProjectLink;
}

export const smallProjects: SmallProject[] = [
  {
    id: "nishauri-chatbot",
    title: "Nishauri Health Chatbot",
    description:
      "AI-powered chatbot for people living with AIDS, deployed across WhatsApp, Telegram, and web.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    badge: {
      text: "Healthcare AI",
      className: "bg-green-100 text-green-800",
    },
    technologies: ["NLP", "Healthcare", "Multi-platform"],
    link: {
      text: "View Details",
      href: "#",
      icon: "external",
      variant: "outline",
    },
  },
  {
    id: "rubiks-cube-rl",
    title: "Rubik's Cube Solver",
    description:
      "Reinforcement Learning agent using PPO algorithm to solve Rubik's Cube for Zindi Africa Hackathon.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    badge: {
      text: "Reinforcement Learning",
      className: "bg-blue-100 text-blue-800",
    },
    technologies: ["PPO", "TensorFlow", "RL"],
    link: {
      text: "Source Code",
      href: "#",
      icon: "github",
      variant: "outline",
    },
  },
  {
    id: "data-dashboards",
    title: "Interactive Data Dashboards",
    description:
      "Collection of interactive dashboards built with Tableau and Power BI for various business insights.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    badge: {
      text: "Data Science",
      className: "bg-purple-100 text-purple-800",
    },
    technologies: ["Tableau", "Power BI", "Analytics"],
    link: {
      text: "View Gallery",
      href: "#",
      icon: "external",
      variant: "outline",
    },
  },
];
