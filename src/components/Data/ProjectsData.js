import Portfolio from "../../assets/ProjectsImage/portfolio.png";
import moviesearch from "../../assets/ProjectsImage/moviesearch.png";
import shoppingcart from "../../assets/ProjectsImage/Cart.png";
import TaskVault from "../../assets/ProjectsImage/taskvault.png";
import coursera from "../../assets/ProjectsImage/coursera.png";
import llm from "../../assets/ProjectsImage/llm.png";
import authlinkdln from "../../assets/ProjectsImage/linkdlnoauth.png";
import PDFSummarizer from "../../assets/ProjectsImage/PDFSummarizer.png";

export const projectsData = [
  {
    id: 0,
    title: "AI-Powered PDF Summarizer",
    projectInfo:
      "A full-stack PDF summarization platform built with React.js + Vite and Node.js + Express. It integrates Groq LLM (Llama-3.3-70B) to extract and analyze PDF content, generating concise and accurate summaries along with document insights like word count, character count, and reading time.",
    techStack1: "React.js",
    techStack2: "Node.js + Express",
    techStack3: "Groq LLM API",
    techStack5: "CSS",
    img: PDFSummarizer,
    github: "https://github.com/sudheermishra/PDF-Summarizer",
    liveLink: "https://pdf-summarizer-omega-two.vercel.app/",
  },

  {
    id: 1,
    title: "LearnStackHub",
    projectInfo:
      "A comprehensive online course platform featuring secure JWT authentication and Stripe payment integration. Lessons are delivered via an interactive video player with a focus on seamless student experience.",
    techStack1: "React.js",
    techStack3: "Stripe Payment",
    techStack4: "React Router",
    techStack5: "Local Storage",
    img: coursera,
    github: "https://github.com/sudheermishra/coursera",
    liveLink: "https://learnstackhub.netlify.app/",
  },
  {
    id: 2,
    title: "LinkAuth Portal",
    projectInfo:
      "A high-performance OAuth 2.0 platform for LinkedIn integration. Built with Next.js 16 and React 19, it implements complete authorization flows and secure session management using Redux Toolkit.",
    techStack1: "Next.js 16",
    techStack2: "OAuth 2.0 (LinkedIn)",
    techStack3: "Redux Toolkit",
    techStack4: "Node.js + Express",
    techStack5: "Tailwind CSS 4",
    img: authlinkdln,
    github: "https://github.com/sudheermishra/LinkAuth-Portal-frontend",
    liveLink: "https://link-auth-portal-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Redux-Toolkit-Cart",
    projectInfo:
      "An e-commerce demonstration showcasing advanced global state management using Redux Toolkit. This application focuses on fast, reliable cart operations and a smooth, responsive shopping experience.",
    techStack1: "HTML/CSS",
    techStack2: "JavaScript",
    techStack3: "React",
    techStack4: "Redux Toolkit",
    techStack5: "Toastify",
    img: shoppingcart,
    github: "https://github.com/sudheermishra/Shopping-cart-with-redux",
    liveLink: "https://vite-redux-cartapp.netlify.app/",
  },
  {
    id: 4,
    title: "TaskVault Secure MERN",
    projectInfo:
      "A secure MERN-based task management tool with JWT authentication and full CRUD capabilities. It provides a robust interface for users to safely manage and organize tasks with MongoDB persistence.",
    techStack1: "MongoDB",
    techStack2: "Express.js",
    techStack3: "React.js",
    techStack4: "Node.js",
    techStack5: "JWT Auth",
    img: TaskVault,
    github: "https://github.com/sudheermishra/taskvault",
  },
  {
    id: 5,
    title: "Movie Search App",
    projectInfo:
      "An interactive movie discovery application that utilizes third-party API integration and Axios for real-time data fetching. It features robust error handling and a sleek, responsive search interface.",
    techStack1: "HTML/CSS",
    techStack2: "JavaScript",
    techStack3: "React Hooks",
    techStack4: "Axios",
    techStack5: "REST API",
    img: moviesearch,
    github: "https://github.com/sudheermishra/Movie-Search",
    liveLink: "https://movienamesearch.netlify.app/",
  },
  {
    id: 6,
    title: "My Portfolio",
    projectInfo:
      "A modern, high-fidelity portfolio designed with React and performance in mind. This showcase highlights clean code, sleek animations, and responsive UI principles to provide a premium user experience.",
    techStack1: "React.js",
    techStack2: "Modern SAS",
    techStack3: "Swiper.js",
    techStack4: "React Icons",
    techStack5: "Responsive",
    img: Portfolio,
    github: "https://github.com/sudheermishra/My-Portfolio",
    liveLink: "https://sudheermishra.netlify.app/",
  },
];
