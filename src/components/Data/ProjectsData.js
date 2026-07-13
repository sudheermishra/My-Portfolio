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
      "A full-stack PDF summarization platform built with React.js + Vite and Node.js + Express, using Groq LLM (Llama-3.3-70B) to generate concise summaries with word count and reading time.",
    techStack1: "React.js + Vite",
    techStack2: "Node.js + Express",
    techStack3: "Groq LLM API",
    techStack4: "PDF Processing",
    techStack5: "Vanilla CSS",
    img: PDFSummarizer,
    github: "https://github.com/sudheermishra/PDF-Summarizer",
    liveLink: "https://pdf-summarizer-omega-two.vercel.app/",
  },
  {
    id: 1,
    title: "LearnStackHub",
    projectInfo:
      "A course-selling platform built with React and Supabase, featuring session-based auth with token refresh, protected routes, and a Stripe-powered checkout with video lessons.",
    techStack1: "React.js + Vite",
    techStack2: "Supabase Auth",
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
      "A LinkedIn OAuth 2.0 login platform built with Next.js 16 and React 19, implementing the full authorization flow and secure session management using Redux Toolkit.",
    techStack1: "Next.js 16 + React 19",
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
      "An e-commerce cart demo showcasing global state management with Redux Toolkit, focused on fast cart operations and a smooth, responsive shopping experience.",
    techStack1: "HTML/CSS",
    techStack2: "JavaScript",
    techStack3: "Vite + React",
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
      "A secure MERN task management tool with JWT authentication and full CRUD functionality, letting users safely manage and organize tasks with MongoDB persistence.",
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
      "An interactive movie discovery app using third-party API integration and Axios for real-time data fetching, with robust error handling and a responsive search UI.",
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
      "A modern, high-fidelity portfolio built with React, focused on clean code, sleek animations, and responsive UI to deliver a premium user experience.",
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
