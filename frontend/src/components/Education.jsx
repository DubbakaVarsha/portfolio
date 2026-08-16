function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">

        <p className="section-subtitle">My Academic Journey</p>

        <h2>Education</h2>

        <div className="education-timeline">

          <article className="education-card">
            <div className="education-year">
              2022 - 2026
            </div>

            <div className="education-details">
              <h3>Bachelor's Degree in Computer Science</h3>

              <p className="education-branch">
                Computer Science and Engineering
              </p>

              <p className="education-college">
                MALLA REDDY ENGINEERING COLLEGE FOR WOMEN
              </p>
            </div>
          </article>


          <article className="education-card">
            <div className="education-year">
              2020 - 2022
            </div>

            <div className="education-details">
              <h3>Intermediate / Higher Secondary</h3>

              <p className="education-college">
                NARAYANA JUNIOR COLLEGE
              </p>
            </div>
          </article>


          <article className="education-card">
            <div className="education-year">
              2020
            </div>

            <div className="education-details">
              <h3>Secondary School</h3>

              <p className="education-college">
                SRI CHAITANYA E-TECHNO SCHOOL
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Education;