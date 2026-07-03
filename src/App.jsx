//import { useState } from "react";
import Header from "./components/Header";
//import headshot from "./assets/headshot.jpg";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div>
          <Header />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="about">
        <div id="about">
          <About />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="projects">
        <div id="projects">
          <Projects />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="skills">
        <div id="skills">
          <Skills />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="footer">
        <Footer />
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
