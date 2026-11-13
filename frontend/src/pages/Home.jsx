
import "./Home.css";

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main id="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">AI-POWERED CAREER ANALYSIS</p>

          <h1>
            Discover Your
            <span> Skill Gap.</span>
            <br />
            Build Your Future.
          </h1>

          <p className="hero-description">
            Analyze your skills, identify career gaps, and get a
            personalized learning roadmap designed for your target career.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-primary"
              onClick={() => scrollToSection("analyzer")}
            >
              Analyze My Skills
            </button>

            <button
              type="button"
              className="hero-secondary"
              onClick={() => scrollToSection("how-it-works")}
            >
              Explore How It Works
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <span>Skill Match</span>
              <span className="status">● Analysis Ready</span>
            </div>

            <div className="score">
              <strong>78%</strong>
              <span>Career Match</span>
            </div>

            <div className="skill-bars">
              <div className="skill">
                <span>JavaScript</span>
                <div className="bar">
                  <div className="fill fill-90"></div>
                </div>
              </div>

              <div className="skill">
                <span>React</span>
                <div className="bar">
                  <div className="fill fill-75"></div>
                </div>
              </div>

              <div className="skill">
                <span>TypeScript</span>
                <div className="bar">
                  <div className="fill fill-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
