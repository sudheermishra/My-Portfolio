import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
