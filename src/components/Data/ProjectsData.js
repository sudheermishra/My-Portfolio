import Textutils from "../../assets/ProjectsImage/Textutils.png";
import Todolist from "../../assets/ProjectsImage/Todolist.png";
import joke from "../../assets/ProjectsImage/Joke.png";
import Portfolio from "../../assets/ProjectsImage/portfolio.png";
import moviesearch from "../../assets/ProjectsImage/moviesearch.png";
import shoppingcart from "../../assets/ProjectsImage/Cart.png";

export const projectsData = [
  {
    id: 1,

    title: " redux-toolkit-cart",
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
    id: 3,
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
  {
    id: 4,
    title: "Todo-List",
    projectInfo:
      "Todo List with Form Validation is a project that aims to create a user-friendly task management system.",
    techStack1: " HTML",
    techStack2: "CSS",
    techStack3: "JavaScript",
    img: Todolist,
    github: "https://github.com/sudheermishra/Todo-and-singup-project",
    liveLink: "https://todo-project-rho.vercel.app/",
  },
  {
    id: 5,

    title: "Joke-Joy",
    projectInfo:
      "Joke Joy is a fun project that fetches random jokes from an API to bring laughter and amusement to users. It's a lighthearted and entertaining random joke generator.",
    techStack1: "HTML",
    techStack2: "CSS ",
    techStack3: "JavaScript",
    img: joke,
    github: "https://github.com/sudheermishra/Joke-project",
    liveLink: "https://jokejoy.vercel.app/",
  },
  {
    id: 6,

    title: "Textutils",
    projectInfo:
      "TextUtils is a versatile text manipulation tool that offers case translation, copy, clear, and word counting functions. It also includes a stylish dark mode for enhanced user experience.",
    techStack1: "HTML",
    techStack2: "Bootstrap",
    techStack3: "React",
    techStack4: "JavaScript",
    img: Textutils,
    github: "https://github.com/sudheermishra/Textutils",
    liveLink: "https://sudheer.vercel.app/",
  },
];
