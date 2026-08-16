function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <p className="section-subtitle">Get To Know Me</p>

        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science graduate with a strong
              interest in software development, data analysis,
              and building practical technology solutions.
            </p>

            <p>
              I enjoy working with Python, JavaScript, React,
              SQL, APIs, and databases. I continuously improve
              my programming and problem-solving skills by
              working on real-world projects.
            </p>

            <p>
              I am interested in developing reliable applications
              and using technology to solve meaningful problems.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Development</h3>
              <p>
                Building responsive and user-friendly web
                applications.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Data</h3>
              <p>
                Working with data using Python, SQL and
                visualization tools.
              </p>
            </div>

            <div className="highlight-card">
              <h3>Problem Solving</h3>
              <p>
                Applying programming and analytical thinking
                to real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;