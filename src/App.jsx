import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./sections/homesection/Home";
import About from "./sections/aboutsection/About";
import Project from "./sections/projectsection/Project";
import Contact from "./sections/contactsection/Contact";
import Activity from "./sections/activitysection/Activity";
import Experience from "./sections/expsection/Experience";

import ArtProjects from "./sections/projectsection/projectpages/ArtProjects";
import CSProjects from "./sections/projectsection/projectpages/CSProjects";
import OtherProjects from "./sections/projectsection/projectpages/OtherProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Project />
            <Experience />
            <Activity />
            <Contact />
          </>
        } />

        <Route path="/art-projects" element={<ArtProjects />} />
        <Route path="/cs-projects" element={<CSProjects />} />
        <Route path="/other-projects" element={<OtherProjects />} />
      </Routes>
    </Router>
  );
}

export default App;