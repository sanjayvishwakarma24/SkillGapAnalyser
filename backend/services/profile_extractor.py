
import re


def extract_student_profile(resume_text: str):

    lines = [
        line.strip()
        for line in resume_text.splitlines()
        if line.strip()
    ]

    profile = {
        "name": None,
        "degree": None,
        "department": None,
        "college": None
    }

    # 1. Name extraction
    ignored_words = [
        "resume", "curriculum vitae", "profile",
        "email", "phone", "mobile", "contact",
        "linkedin", "github", "address", "portfolio"
    ]

    for line in lines[:10]:
        cleaned_line = re.sub(r"\s+", " ", line).strip()

        if (
            len(cleaned_line) <= 60
            and len(cleaned_line.split()) <= 5
            and re.fullmatch(r"[A-Za-z][A-Za-z .'-]*", cleaned_line)
            and not any(
                word in cleaned_line.lower()
                for word in ignored_words
            )
        ):
            profile["name"] = cleaned_line
            break

    # 2. Degree extraction
    degree_patterns = [
        (r"\bB\.?\s*Tech\b", "B.Tech"),
        (r"\bB\.?\s*E\.?\b", "B.E."),
        (r"\bM\.?\s*Tech\b", "M.Tech"),
        (r"\bM\.?\s*E\.?\b", "M.E."),
        (r"\bBCA\b", "BCA"),
        (r"\bMCA\b", "MCA"),
        (r"\bBBA\b", "BBA"),
        (r"\bMBA\b", "MBA"),
        (r"\bB\.?\s*Sc\b", "B.Sc"),
        (r"\bM\.?\s*Sc\b", "M.Sc"),
        (r"\bBachelor of Technology\b", "B.Tech"),
        (r"\bMaster of Technology\b", "M.Tech")
    ]

    for pattern, degree_name in degree_patterns:
        if re.search(pattern, resume_text, re.I):
            profile["degree"] = degree_name
            break

    # 3. Department extraction
    department_patterns = [
        (r"\bComputer Science and Engineering\b|\bCSE\b",
         "Computer Science and Engineering"),
        (r"\bInformation Technology\b",
         "Information Technology"),
        (r"\bElectronics and Communication(?: Engineering)?\b|\bECE\b",
         "Electronics and Communication"),
        (r"\bElectrical Engineering\b|\bEEE\b",
         "Electrical Engineering"),
        (r"\bMechanical Engineering\b|\bME\b",
         "Mechanical Engineering"),
        (r"\bCivil Engineering\b",
         "Civil Engineering"),
        (r"\bArtificial Intelligence(?: and Machine Learning)?\b|\bAIML\b",
         "Artificial Intelligence and Machine Learning"),
        (r"\bData Science\b",
         "Data Science")
    ]

    for pattern, department_name in department_patterns:
        if re.search(pattern, resume_text, re.I):
            profile["department"] = department_name
            break

    # 4. College extraction
    college_keywords = [
        "college",
        "institute of",
        "engineering institute"
    ]

    ignored_college_headers = [
        "course",
        "school/place",
        "year",
        "marks",
        "percentage",
        "qualification",
        "university/college",
        "college/school/place",
        "institution"
    ]

    for line in lines:
        lower_line = line.lower().strip()

        if any(
            header in lower_line
            for header in ignored_college_headers
        ):
            continue

        if any(
            keyword in lower_line
            for keyword in college_keywords
        ):
            if 8 <= len(line) <= 150:
                cleaned_college = re.split(
                    r"\s+[|]\s+|\s{2,}",
                    line
                )[0].strip()

                profile["college"] = cleaned_college
                break

    return profile
