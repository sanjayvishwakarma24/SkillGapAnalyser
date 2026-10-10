import { useState } from "react";
import "./Analyzer.css";

function Analyzer() {
 const [selectedFile, setSelectedFile] = useState(null);
 const [fileError, setFileError] = useState("");
 const [selectedRole, setSelectedRole] = useState("");
 const [analysisStarted, setAnalysisStarted] = useState(false);
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

          <p>
            Upload your resume in PDF or DOCX format.
          </p>

          <label className="upload-button">
  Choose Resume
  <input
  type="file"
  accept=".pdf,.docx"
  hidden
  onChange={(event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setSelectedFile(null);
      setFileError("File size must be less than 5 MB.");
      return;
    }

    setFileError("");
    setSelectedFile(file);
  }}
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
{fileError && (
  <p className="file-error">
    {fileError}
  </p>
)}
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
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="data">Data Analyst</option>
            <option value="software">Software Developer</option>
          </select>

          <button
  className="analyze-button"
  disabled={!selectedFile || !selectedRole}
  onClick={() => setAnalysisStarted(true)}
>
  Analyze My Skills
</button>
{analysisStarted && (
  <p className="analysis-success">
    ✓ Analysis started for{" "}
    {selectedRole === "frontend"
      ? "Frontend Developer"
      : selectedRole === "backend"
        ? "Backend Developer"
        : selectedRole === "fullstack"
          ? "Full Stack Developer"
          : selectedRole === "data"
            ? "Data Analyst"
            : "Software Developer"}
  </p>
)}
        </div>
      </div>
    </section>
  );
}

export default Analyzer;