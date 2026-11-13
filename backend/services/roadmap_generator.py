
ROADMAP_DATA = {
    "SQL": {
        "topics": [
            "Introduction to SQL",
            "DDL and DML Commands",
            "SELECT, WHERE and ORDER BY",
            "Joins and Subqueries",
            "Database Design"
        ],
        "duration": 7,
        "project": "Create a Student Management Database"
    },

    "Git": {
        "topics": [
            "Introduction to Git",
            "Git Commands",
            "Branching and Merging",
            "GitHub Repository",
            "Version Control Practice"
        ],
        "duration": 4,
        "project": "Upload a project to GitHub"
    },

    "Flask": {
        "topics": [
            "Introduction to Flask",
            "Routes and HTTP Methods",
            "Templates and Forms",
            "Database Integration",
            "Build a Flask Project"
        ],
        "duration": 7,
        "project": "Build a Flask Web Application"
    },

    "FastAPI": {
        "topics": [
            "Introduction to FastAPI",
            "Path and Query Parameters",
            "Request and Response Models",
            "API Validation",
            "Build REST APIs"
        ],
        "duration": 7,
        "project": "Build a REST API using FastAPI"
    },

    "Django": {
        "topics": [
            "Introduction to Django",
            "Models and Views",
            "Templates",
            "Django ORM",
            "Build a Django Project"
        ],
        "duration": 10,
        "project": "Build a Blog Management System"
    }
}


def generate_learning_roadmap(missing_skills):

    roadmap = []

    for index, skill in enumerate(missing_skills):

        skill_data = ROADMAP_DATA.get(
            skill,
            {
                "topics": [
                    f"Introduction to {skill}",
                    f"Fundamentals of {skill}",
                    f"Practical implementation of {skill}",
                    f"Build a mini project using {skill}"
                ],
                "duration": 5,
                "project": f"Build a beginner project using {skill}"
            }
        )

        roadmap.append({
            "skill": skill,
            "priority": "High" if index < 2 else "Medium",
            "learning_order": index + 1,
            "topics": skill_data["topics"],
            "estimated_duration": f"{skill_data['duration']} days",
            "mini_project": skill_data["project"]
        })

    return roadmap
