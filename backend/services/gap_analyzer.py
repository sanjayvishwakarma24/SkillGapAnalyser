
from services.skill_extractor import extract_skills
from services.role_skills import ROLE_SKILLS
from services.roadmap_generator import generate_learning_roadmap
from services.profile_extractor import extract_student_profile


def analyze_skill_gap(resume_text: str, target_role: str):

    if target_role not in ROLE_SKILLS:
        return {
            "error": "Invalid target role",
            "available_roles": list(ROLE_SKILLS.keys())
        }

    # Extract student profile from resume
    profile = extract_student_profile(resume_text)

    # Existing skill gap analysis
    detected_skills = extract_skills(resume_text)
    required_skills = ROLE_SKILLS[target_role]

    detected_lower = {skill.lower() for skill in detected_skills}

    matched_skills = [
        skill for skill in required_skills
        if skill.lower() in detected_lower
    ]

    missing_skills = [
        skill for skill in required_skills
        if skill.lower() not in detected_lower
    ]

    total_required = len(required_skills)

    match_percentage = (
        round(len(matched_skills) / total_required * 100, 2)
        if total_required else 0
    )

    learning_roadmap = generate_learning_roadmap(missing_skills)

    return {
        "profile": profile,
        "target_role": target_role,
        "detected_skills": detected_skills,
        "required_skills": required_skills,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "match_percentage": match_percentage,
        "learning_roadmap": learning_roadmap
    }
