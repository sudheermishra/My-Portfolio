import Portfolio from "../../assets/ProjectsImage/portfolio.png";
import moviesearch from "../../assets/ProjectsImage/moviesearch.png";
import shoppingcart from "../../assets/ProjectsImage/Cart.png";
import TaskVault from "../../assets/ProjectsImage/taskvault.png";
import coursera from "../../assets/ProjectsImage/coursera.png";
import llm from "../../assets/ProjectsImage/llm.png";
import authlinkdln from "../../assets/ProjectsImage/linkdlnoauth.png";

export const projectsData = [
  {
    id: 0,
    title: "Product Image Generation Platform",
    projectInfo:
      "A full-stack AI-powered image and video generation platform. Built with React.js + Vite frontend and Node.js + Express backend. Integrated multiple AI providers including Leonardo AI, Cloudflare Workers AI, Google Gemini LLM, and Veo 3 for multimodal capabilities. Uses ScraperAPI to extract product details from URLs and generates intelligent prompts for high-quality image outputs. Features RESTful APIs with Multer file handling, CORS configuration, and secure environment management.",
    techStack1: "React.js + Vite",
    techStack2: "Node.js + Express",
    techStack3: "AI APIs (Leonardo, Gemini, Veo3)",
    techStack4: "Cloudflare Workers",
    img: llm,
    github:
      "https://github.com/sudheermishra/frontend-product-image-generation",
    liveLink: "https://product-image-gen.netlify.app/",
  },
  {
    id: 1,
    title: "LearnStackHub - Online Course Platform",
    projectInfo:
      "A full-stack online course platform with secure authentication and Stripe payment integration. Users can sign up, purchase courses, and access protected video modules. Implemented React Router loaders and actions, token-based authentication with access and refresh tokens, automatic session management, and conditional content access for paying users only. Features video streaming with React Player and secure token persistence.",
    techStack1: "React.js + Vite",
    techStack2: "JWT Authentication",
    techStack3: "Stripe Payment",
    techStack4: "React Router Data APIs",
    techStack5: "Local Storage",
    img: coursera,
    github: "https://github.com/sudheermishra/coursera",
    liveLink: "https://learnstackhub.netlify.app/",
  },
  {
    id: 2,
    title: "LinkAuth Portal - LinkedIn OAuth Platform",
    projectInfo:
      "A full-stack OAuth 2.0 authentication platform with Next.js 16 + React 19 frontend and Node.js + Express backend for secure LinkedIn login integration. Implements complete OAuth 2.0 flow: authorization, code exchange, user retrieval, and secure callback handling. Features Redux Toolkit state management with setUser/clearUser actions and react-redux bindings for seamless session handling. Deployed on Vercel (frontend) and Render (backend) with Tailwind CSS 4 styling and automated CI/CD.",
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
      "This Cart Application demonstrates understanding of Redux Toolkit for global state management in React. Built with React and Vite for fast development, implemented add-to-cart functionality using Redux slices, and enhanced user experience with toast notifications and icons.",
    techStack1: "HTML",
    techStack2: "CSS",
    techStack3: "JavaScript",
    techStack4: "Vite + React",
    techStack5: "Redux Toolkit",
    img: shoppingcart,
    github: "https://github.com/sudheermishra/Shopping-cart-with-redux",
    liveLink: "https://vite-redux-cartapp.netlify.app/",
  },
  {
    id: 4,
    title: "TaskVault – Secure MERN Task Manager",
    projectInfo:
      "TaskVault is a full-stack task management application built using the MERN stack. Includes secure user authentication with JWT, cookie handling, and protected routes for safe data access. Supports complete CRUD operations including task creation, update, deletion, and bulk delete functionality. MongoDB Atlas used for cloud database storage with responsive and user-friendly interface.",
    techStack1: "MongoDB",
    techStack2: "Express.js",
    techStack3: "React.js",
    techStack4: "Node.js",
    techStack5: "JWT",
    img: TaskVault,
    github: "https://github.com/sudheermishra/taskvault",
  },
  {
    id: 5,
    title: "Movie Search App",
    projectInfo:
      "Movie Search application built using React and focusing on third-party API integration. Users can search movies by name, with data fetched using Axios. JavaScript-based error handling implemented to manage API errors and invalid searches. Interface styled with CSS for smooth and responsive user experience.",
    techStack1: "HTML",
    techStack2: "CSS",
    techStack3: "JavaScript",
    techStack4: "React",
    techStack5: "Axios",
    img: moviesearch,
    github: "https://github.com/sudheermishra/Movie-Search",
    liveLink: "https://movienamesearch.netlify.app/",
  },
  {
    id: 6,
    title: "My-Portfolio",
    projectInfo:
      "React-based portfolio with sleek and intuitive design. Features unique design elements that set it apart, making it a memorable showcase of skills and work. Built with modern React practices and responsive design principles.",
    techStack1: "HTML",
    techStack2: "CSS",
    techStack3: "JavaScript",
    techStack4: "React",
    techStack5: "Responsive Design",
    img: Portfolio,
    github: "https://github.com/sudheermishra/My-Portfolio",
    liveLink: "https://sudheermishra.netlify.app/",
  },
];
