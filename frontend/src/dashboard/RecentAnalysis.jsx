import "./RecentAnalysis.css";
function RecentAnalysis() {
  const analyses = [
    {
      role: "Frontend Developer",
      score: "78%",
      date: "Today",
      status: "Completed",
    },
    {
      role: "Full Stack Developer",
      score: "64%",
      date: "2 days ago",
      status: "Completed",
    },
    {
      role: "Data Analyst",
      score: "52%",
      date: "1 week ago",
      status: "Completed",
    },
  ];

  return (
    <section className="recent-analysis">
      <div className="recent-analysis-header">
        <div>
          <h2>Recent Analysis</h2>
          <p>Your previous skill gap analysis results.</p>
        </div>

        <button className="view-all-button">View All</button>
      </div>

      <div className="analysis-table">
        <div className="analysis-row analysis-heading">
          <span>Target Role</span>
          <span>Match Score</span>
          <span>Date</span>
          <span>Status</span>
        </div>

        {analyses.map((analysis) => (
          <div className="analysis-row" key={`${analysis.role}-${analysis.date}`}>
            <strong>{analysis.role}</strong>
            <span className="analysis-score">{analysis.score}</span>
            <span>{analysis.date}</span>
            <span className="analysis-status">{analysis.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentAnalysis;