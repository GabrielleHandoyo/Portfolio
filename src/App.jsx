import "./App.css";
import Home from "./sections/homesection/Home";
import About from "./sections/aboutsection/about";
import Project from "./sections/projectsection/Project";
import Navbar from "./sections/Navbarsection/Navbar";
import Contact from "./sections/contactsection/Contact";
import Activity from "./sections/activitysection/Activity";
import Experience from "./sections/expsection/Experience";



function App() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Experience />
      <Activity />
      <Contact />
    </>
  );
}

export default App;
