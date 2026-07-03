import headshot from "../assets/headshot.jpg";

function About() {
  return (
    <section id="about">
      <div className="about-image">
        <img
          src={headshot}
          alt="Kristen Wishart leaning against a yellow brick walll, smiling at the camera"
          className="headshot"
        />
      </div>

      <div className="about-text">
        <h3>About Me</h3>
        <p>
          Hi, my name is Kristen and I'm a full-stack developer! I've been
          coding for almost 6 years on and off now. My first exposure to coding
          was during COVID in 2020, taking a couple free coding webinars through
          General Assembly from my Boston apartment as the world was shut down.
          Ever since then, I've had other dreams I wanted to pursue, but I
          always came back to coding. Looking through all of my projects, I'm so
          proud of how far I've come as a software developer and can't wait to
          see what I can create next!
        </p>
      </div>
    </section>
  );
}

export default About;
