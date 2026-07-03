//import { useState } from "react";
import Header from "./components/Header";
//import headshot from "./assets/headshot.jpg";
import About from "./components/About";
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
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
        </div>
        <div id="about">
          <About />
        </div>
      </section>

      <div className="ticks">
        <Footer />
      </div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
