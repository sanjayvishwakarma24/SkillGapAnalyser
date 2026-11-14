from fastapi import FastAPI
from routers import health, resume
from routers import analysis
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="SkillGap AI",
    description="AI-Powered Student Skill Gap Analysis and Career Roadmap System",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to SkillGap AI Backend!",
        "status": "Running Successfully"
    }
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://skill-gap-analyser-six.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(resume.router)
app.include_router(analysis.router)
