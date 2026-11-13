import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-heading">
        <p className="section-tag">HOW IT WORKS</p>

        <h2>
          From Skills to
          <span> Career Direction.</span>
        </h2>

        <p>
          SkillGap AI analyzes your resume and career goals to
          provide clear and actionable career insights.
        </p>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">01</div>
          <div className="step-icon">📄</div>
          <h3>Upload Resume</h3>
          <p>
            Upload your resume and let the system extract your
            skills and academic information.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">02</div>
          <div className="step-icon">🧠</div>
          <h3>Analyze Skills</h3>
          <p>
            The system identifies technical skills in your resume
            using a predefined skill-matching process.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">03</div>
          <div className="step-icon">🎯</div>
          <h3>Find Skill Gaps</h3>
          <p>
            Your detected skills are compared with the requirements
            of your selected career role.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">04</div>
          <div className="step-icon">🚀</div>
          <h3>Get Your Roadmap</h3>
          <p>
            Receive a learning roadmap based on the skills you
            need to develop for your target career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;