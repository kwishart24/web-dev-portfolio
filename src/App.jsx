import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <Header />
        </div>
      </section>

      <section id="about">
        <div id="about">
          <About />
        </div>
      </section>

      <section id="spacer"></section>

      <section id="projects">
        <div id="projects">
          <Projects />
        </div>
      </section>

      <section id="spacer"></section>

      <section id="skills">
        <div id="skills">
          <Skills />
        </div>
      </section>

      <section id="spacer"></section>

      <section id="experience">
        <div id="experience">
          <Experience />
        </div>
      </section>

      <section id="spacer"></section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
