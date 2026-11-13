
import re

SKILLS_LIST = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "FastAPI",
    "Django",
    "Flask",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Analysis",
    "Excel",
    "Power BI",
    "Git",
    "GitHub",
    "Node.js",
    "PHP",
    "MongoDB",
    "Communication",
    "Leadership",
    "Teamwork",
    "VBA",
    "MS Excel",
    "MS Word",
    "MS PowerPoint",
    "Adaptability"
]


def extract_skills(resume_text):

    detected_skills = []

    for skill in SKILLS_LIST:
        pattern = (
            r"(?<!\w)"
            + re.escape(skill)
            + r"(?!\w)"
        )

        if re.search(pattern, resume_text, re.IGNORECASE):
            detected_skills.append(skill)

    # Detect C only when explicitly mentioned as a language
    c_patterns = [
        r"\bC\s+programming\b",
        r"\bC\s+language\b",
        r"\bprogramming\s+in\s+C\b",
        r"\blanguage\s*:\s*C\b"
    ]

    if any(
        re.search(pattern, resume_text, re.IGNORECASE)
        for pattern in c_patterns
    ):
        detected_skills.append("C")

    return detected_skills
