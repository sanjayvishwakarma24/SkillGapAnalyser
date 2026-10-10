import "./CTA.css";
function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Discover Your Skill Gap?</h2>

        <p>
          Upload your resume, analyze your skills, and get a personalized
          career roadmap built for your goals.
        </p>

        <button
  className="cta-button"
  onClick={() => {
    document.getElementById("analyzer")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Start Your Analysis
</button>
      </div>
    </section>
  );
}

export default CTA;