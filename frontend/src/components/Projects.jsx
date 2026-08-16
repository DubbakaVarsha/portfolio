function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <p className="section-subtitle">
          What I've Built
        </p>

        <h2>My Projects</h2>

        <div className="projects-grid">

          {/* Driver Drowsiness Detection */}
          <article className="project-card">
            <div className="project-content">

              <p className="project-number">
                01
              </p>

              <h3>
                Driver Drowsiness Detection
              </h3>

              <p className="project-description">
                A computer vision application designed to detect
                signs of driver drowsiness in real time by
                analyzing facial features and eye movements from
                a camera feed.
              </p>

              <div className="project-technologies">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Dlib</span>
                <span>Imutils</span>
              </div>

              <a
                href="https://github.com/DubbakaVarsha/Drivers_Drowsiness"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>

            </div>
          </article>


          {/* GestureX */}
          <article className="project-card">
            <div className="project-content">

              <p className="project-number">
                02
              </p>

              <h3>
                GestureX
              </h3>

              <p className="project-description">
                A computer vision application that recognizes
                hand gestures and enables users to interact with
                a computer system through natural and intuitive
                gesture-based controls.
              </p>

              <div className="project-technologies">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Computer Vision</span>
                <span>Machine Learning</span>
              </div>

              <a
                href="#"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>

            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Projects;