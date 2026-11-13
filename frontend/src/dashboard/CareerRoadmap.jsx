
import "./CareerRoadmap.css";

function CareerRoadmap() {
  const savedResult = sessionStorage.getItem("skillGapAnalysis");
  const result = savedResult ? JSON.parse(savedResult) : null;
  const roadmap = result?.learning_roadmap ?? [];

  return (
    <section className="career-roadmap" id="career-roadmap">
      <div className="roadmap-header">
        <div>
          <h2>Personalized Career Roadmap</h2>
          <p>Your recommended learning path based on your skill gaps.</p>
        </div>
      </div>

      <div className="roadmap-list">
        {roadmap.length > 0 ? (
          roadmap.map((item, index) => (
            <div className="roadmap-item" key={item.skill}>
              <div className="roadmap-step">
                {String(item.learning_order ?? index + 1).padStart(2, "0")}
              </div>

              <div className="roadmap-content">
                <div className="roadmap-title">
                  <h3>{item.skill}</h3>
                  <span>{item.estimated_duration || "Duration not specified"}</span>
                </div>

                <p>Priority: {item.priority || "Not specified"}</p>
                <p>
                  Topics: {item.topics?.length
                    ? item.topics.join(", ")
                    : "Topics not available"}
                </p>
                <p>
                  Mini project: {item.mini_project || "Not available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>
            {result
              ? "No roadmap needed for this role."
              : "Run an analysis first to see your roadmap."}
          </p>
        )}
      </div>
    </section>
  );
}

export default CareerRoadmap;
