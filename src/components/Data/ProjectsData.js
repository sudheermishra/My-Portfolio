import Portfolio from "../../assets/ProjectsImage/portfolio.png";
import moviesearch from "../../assets/ProjectsImage/moviesearch.png";
import shoppingcart from "../../assets/ProjectsImage/Cart.png";
import TaskVault from "../../assets/ProjectsImage/taskvault.png";

export const projectsData = [
  {
    id: 1,

    title: " Redux-Toolkit-Cart",
    projectInfo:
      "This Cart Application demonstrates my understanding of Redux Toolkit for global state management in React. I used React with Vite for fast development, implemented add-to-cart functionality using Redux slices, and enhanced user experience with toast notifications and icons.",
    techStack1: " HTML",
    techStack2: "CSS",
    techStack3: "JavaScript",
    techStack4: "Vite + React",
    techStack5: "Redux",
    img: shoppingcart,
    github: "https://github.com/sudheermishra/Shopping-cart-with-redux",
    liveLink: "https://vite-redux-cartapp.netlify.app/",
  },

  {
    id: 2,
    title: "TaskVault – Secure MERN Task Manager",
    projectInfo:
      "TaskVault is a full-stack task management application built using the MERN stack. It includes secure user authentication with JWT, cookie handling, and protected routes for safe data access. The system supports complete CRUD operations including task creation, update, deletion, and bulk delete functionality. MongoDB Atlas is used for cloud database storage, and the application runs locally with a responsive and user-friendly interface.",
    techStack1: "MongoDB",
    techStack2: "Express.js",
    techStack3: "React.js",
    techStack4: "Node.js",
    img: TaskVault,
    github: "https://github.com/sudheermishra/taskvault",
  },
  {
    id: 3,

    title: "Movie Search App",
    projectInfo:
      "This Movie Search application is built using React and focuses on working with third-party APIs. Users can search movies by name, and the app fetches data using Axios. JavaScript-based error handling is implemented to manage API errors and invalid searches. The interface is styled using CSS for a smooth and responsive user experience.",
    techStack1: " HTML",
    techStack2: "CSS",
    techStack3: "JavaScript",
    techStack4: "React",
    img: moviesearch,
    github: "https://github.com/sudheermishra/Movie-Search",
    liveLink: "https://movienamesearch.netlify.app/",
  },
  {
    id: 4,
    title: "My-Portfolio",
    projectInfo:
      "My React-based portfolio offers an exceptional user experience with its sleek and intuitive design. It stands out with unique features that set it apart from the rest, making it a memorable showcase of my skills and work.",
    techStack1: " HTML",
    techStack2: "CSS",
    techStack3: "JavaScript",
    techStack4: "React",
    img: Portfolio,
    github: "https://github.com/sudheermishra/My-Portfolio",
    liveLink: "https://sudheermishra.netlify.app/",
  },
];
