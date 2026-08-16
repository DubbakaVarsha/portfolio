function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1>
          DUBBAKA VARSHA
        </h1>

        <h2>
          Software Developer & Data Analyst
        </h2>

        <p className="hero-description">
          I build web applications, work with data, and solve
          real-world problems using modern technologies.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn primary-btn"
          >
            View My Projects
          </a>

          <a
            href="/resume/Varsha_Resume.pdf"
            className="btn secondary-btn"
            download
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;