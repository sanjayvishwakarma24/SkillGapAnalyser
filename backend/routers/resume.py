
from fastapi import APIRouter, UploadFile, File, HTTPException
import fitz
from docx import Document
from io import BytesIO

from services.skill_extractor import extract_skills
router = APIRouter()


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    filename = file.filename.lower()

    try:
        file_content = await file.read()

        if filename.endswith(".pdf"):

            pdf = fitz.open(
                stream=file_content,
                filetype="pdf"
            )

            extracted_text = ""

            for page in pdf:
                extracted_text += page.get_text()

            pdf.close()

        elif filename.endswith(".docx"):

            document = Document(BytesIO(file_content))

            extracted_text = "\n".join(
                paragraph.text
                for paragraph in document.paragraphs
            )

        else:
            raise HTTPException(
                status_code=400,
                detail="Only PDF and DOCX files are allowed"
            )

        if not extracted_text.strip():
            raise HTTPException(
                status_code=400,
                detail="No readable text found in resume"
            )
        detected_skills = extract_skills(extracted_text)
        return {
    "message": "Resume analyzed successfully!",
    "filename": file.filename,
    "character_count": len(extracted_text),
    "detected_skills": detected_skills,
    "total_skills_found": len(detected_skills),
    "extracted_text": extracted_text
}

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Resume processing failed: {str(e)}"
        )
