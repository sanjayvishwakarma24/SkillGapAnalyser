
import { useState, useEffect } from "react";
import "./RecentAnalysis.css";

function RecentAnalysis() {
  const [analyses, setAnalyses] = useState([]);

  useEffect(() => {
    try {
      const savedHistory = JSON.parse(
        sessionStorage.getItem("analysisHistory") || "[]"
      );

      setAnalyses(
        Array.isArray(savedHistory) ? savedHistory.slice(0, 10) : []
      );
    } catch {
      setAnalyses([]);
    }
  }, []);

  return (
    <section className="recent-analysis" id="recent-analysis">
      <div className="recent-analysis-header">
        <div>
          <h2>Recent Analysis</h2>
          <p>Your previous skill gap analysis results.</p>
        </div>
      </div>

      <div className="analysis-table">
        <div className="analysis-row analysis-heading">
          <span>Target Role</span>
          <span>Match Score</span>
          <span>Date</span>
          <span>Status</span>
        </div>

        {analyses.length > 0 ? (
          analyses.map((analysis) => (
            <div className="analysis-row" key={analysis.id}>
              <strong>{analysis.role}</strong>
              <span className="analysis-score">
                {analysis.score}%
              </span>
              <span>{analysis.date}</span>
              <span className="analysis-status">
                {analysis.status}
              </span>
            </div>
          ))
        ) : (
          <p className="empty-history">
            No previous analysis found. Analyze your resume to get started.
          </p>
        )}
      </div>
    </section>
  );
}

export default RecentAnalysis;
