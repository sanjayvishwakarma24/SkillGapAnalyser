
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Analyzer.css";

const TARGET_ROLES = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Python Developer",
  "Java Developer",
  "C++ Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Data Analyst",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cybersecurity Analyst",
  "Database Administrator",
  "QA / Test Engineer",
  "Automation Test Engineer",
  "Technical Support Engineer",
  "Game Developer",
  "Electronics Engineer",
  "Electrical Engineer",
  "VLSI Design Engineer",
  "Embedded Systems Engineer",
  "IoT Engineer",
  "Robotics Engineer",
  "Computer Hardware Engineer",
  "Mechanical Engineer",
  "CAD Design Engineer",
  "Civil Engineer",
  "Structural Engineer",
  "Chemical Engineer",
  "Industrial Engineer",
  "Production Engineer",
  "Business Analyst",
  "Financial Analyst",
  "Operations Analyst",
  "Project Manager",
  "UI/UX Designer",
  "Graphic Designer",
  "Digital Marketing Specialist",
  "Technical Trainer",
  "Research Assistant",
];

function Analyzer() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [apiError, setApiError] = useState("");

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setSelectedFile(null);
      setFileError("File size must be less than 5 MB.");
      event.target.value = "";
      return;
    }

    const isAllowedType =
      file.name.toLowerCase().endsWith(".pdf") ||
      file.name.toLowerCase().endsWith(".docx");

    if (!isAllowedType) {
      setSelectedFile(null);
      setFileError("Please upload a PDF or DOCX file.");
      event.target.value = "";
      return;
    }

    setFileError("");
    setApiError("");
    setSelectedFile(file);
    setAnalysisResult(null);
  }

  async function handleAnalyze() {
    if (!selectedFile || !selectedRole) return;

    setIsLoading(true);
    setApiError("");
    setAnalysisResult(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("target_role", selectedRole);

    try {
      const response = await fetch(
        "http://127.0.0.1:8001/analyze-skill-gap",
        {
          method: "POST",
          body: formData,
        }
      );

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid response received from backend.");
      }

      if (!response.ok || data.error) {
        const message =
          typeof data.detail === "string"
            ? data.detail
            : data.error || "Resume analysis failed.";

        throw new Error(message);
      }

      if (!data || !Array.isArray(data.matched_skills) ||
          !Array.isArray(data.missing_skills)) {
        throw new Error("Backend returned an unexpected analysis result.");
      }

      setAnalysisResult(data);

      // Save latest analysis
      sessionStorage.setItem(
        "skillGapAnalysis",
        JSON.stringify(data)
      );

      // Save extracted student profile
      sessionStorage.setItem(
        "studentProfile",
        JSON.stringify(data.profile || {})
      );

      // Safely read previous analysis history
      let previousHistory = [];

      try {
        const savedHistory = JSON.parse(
          sessionStorage.getItem("analysisHistory") || "[]"
        );

        if (Array.isArray(savedHistory)) {
          previousHistory = savedHistory;
        }
      } catch {
        previousHistory = [];
      }

      const newAnalysis = {
        id: Date.now(),
        role: data.target_role || selectedRole,
        score: data.match_percentage ?? 0,
        date: new Date().toLocaleDateString("en-IN"),
        status: "Completed",
      };

      sessionStorage.setItem(
        "analysisHistory",
        JSON.stringify([newAnalysis, ...previousHistory].slice(0, 10))
      );

      navigate("/dashboard");
    } catch (error) {
      if (error instanceof TypeError) {
        setApiError(
          "Unable to connect to the backend. Please make sure the backend server is running."
        );
      } else {
        setApiError(error.message || "Something went wrong during analysis.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="analyzer" id="analyzer">
      <div className="section-heading">
        <p className="section-tag">SKILL ANALYZER</p>

        <h2>
          Know Where You
          <span> Stand.</span>
        </h2>

        <p>
          Upload your resume and select your target role to discover
          the skills you already have and the skills you need next.
        </p>
      </div>

      <div className="analyzer-container">
        <div className="upload-box">
          <div className="upload-icon">📄</div>

          <h3>Upload Your Resume</h3>

          <p>Upload your resume in PDF or DOCX format.</p>

          <label className="upload-button">
            Choose Resume
            <input
              type="file"
              accept=".pdf,.docx"
              hidden
              onChange={handleFileChange}
            />
          </label>

          <span className="upload-hint">
            PDF or DOCX • Maximum 5MB
          </span>

          {selectedFile && (
            <p className="selected-file">
              Selected: {selectedFile.name}
            </p>
          )}

          {fileError && <p className="file-error">{fileError}</p>}
        </div>

        <div className="role-box">
          <h3>Select Target Role</h3>

          <p>
            Choose the career role you want to analyze your skills for.
          </p>

          <select
            className="role-select"
            value={selectedRole}
            onChange={(event) => setSelectedRole(event.target.value)}
          >
            <option value="" disabled>
              Select a job role
            </option>

            {TARGET_ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <button
            className="analyze-button"
            disabled={!selectedFile || !selectedRole || isLoading}
            onClick={handleAnalyze}
          >
            {isLoading ? "Analyzing..." : "Analyze My Skills"}
          </button>

          {apiError && <p className="file-error">{apiError}</p>}

          {isLoading && <p>Analyzing your resume...</p>}

          {analysisResult && (
            <div className="analysis-success">
              <h3>Analysis Complete</h3>

              <p>Role: {analysisResult.target_role}</p>
              <p>Skill Match: {analysisResult.match_percentage}%</p>

              <p>
                Matched Skills:{" "}
                {analysisResult.matched_skills.join(", ") || "None"}
              </p>

              <p>
                Missing Skills:{" "}
                {analysisResult.missing_skills.join(", ") || "None"}
              </p>

              <h4>Personalized Learning Roadmap</h4>

              {analysisResult.learning_roadmap?.length > 0 ? (
                <ol>
                  {analysisResult.learning_roadmap.map((item, index) => (
                    <li key={item.skill || index}>
                      <strong>
                        {item.learning_order ?? index + 1}. {item.skill}
                      </strong>

                      <p>Priority: {item.priority || "Not specified"}</p>
                      <p>
                        Estimated duration:{" "}
                        {item.estimated_duration || "Not specified"}
                      </p>
                      <p>
                        Topics:{" "}
                        {Array.isArray(item.topics)
                          ? item.topics.join(", ")
                          : "Not available"}
                      </p>
                      <p>
                        Mini project: {item.mini_project || "Not available"}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p>
                  No missing skills—your resume matches all required
                  skills for this role.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Analyzer;
