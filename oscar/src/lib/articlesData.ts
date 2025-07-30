export interface Article {
  title: string;
  publication: string;
  date: string;
  description: string;
  link: string; // Add a link for the button
}

export const articles: Article[] = [
  {
    title: "Deploying ML Model on Mobile Application",
    publication: "Medium",
    date: "February 2024",
    description:
      "Comprehensive guide on bringing intelligence to mobile applications through ML model deployment.",
    link: "https://medium.com/@oscar066/deploying-ml-model-on-mobile-application-bringing-intelligence-to-your-pocket-5b651e20fa14",
  },
  {
    title: "Compute in the Clouds: Top IDEs for Data Scientists",
    publication: "Stackademic",
    date: "November 2024",
    description:
      "Exploring the best cloud-based development environments for ML wizards and data scientists.",
    link: "https://medium.com/@oscar066/compute-in-the-clouds-top-ides-for-data-scientists-and-ml-wizards-4e10c99940c3", 
  },
  {
    title: "Publishing A Python Package to PyPI",
    publication: "Medium",
    date: "August 2024",
    description:
      "Step-by-step guide to publishing and maintaining Python packages on the Python Package Index.",
    link: "https://medium.com/stackademic/publishing-a-python-package-to-pypi-f19672b56803", 
  },
  {
    title: "OpenSource Local RAG Model without downloading the model locally",
    publication: "Medium",
    date: "August 2024",
    description:
      "Building and deploying local RAG models without downloading models locally - an innovative approach to AI deployment.",
    link: "https://medium.com/stackademic/opensource-local-rag-model-without-downloading-the-model-locally-cb6f7f246f01",
  },
  {
    title: "Creating a Rasa-powered Health chatbot",
    publication: "Medium",
    date: "September 2024",
    description: "Building a  Rasa chatbot with Python and Rasa NLU framework.",
    link: "https://medium.com/@oscar066/creating-a-rasa-powered-health-chatbot-6f094f2660cc",
  },
  // To add a new article,
];
