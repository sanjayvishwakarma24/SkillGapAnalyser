
from fastapi import APIRouter, UploadFile, File, Form, HTTPException
import fitz
from docx import Document
from io import BytesIO

from services.gap_analyzer import analyze_skill_gap

router = APIRouter()


@router.post("/analyze-skill-gap")
async def analyze_resume(
    target_role: str = Form(...),
    file: UploadFile = File(...)
):
    try:
        # 1. Validate file name
        if not file.filename:
            raise HTTPException(
                status_code=400,
                detail="Please select a resume file."
            )

        filename = file.filename.lower()

        # 2. Validate file format
        if not filename.endswith((".pdf", ".docx")):
            raise HTTPException(
                status_code=400,
                detail="Please upload a PDF or DOCX resume."
            )

        # 3. Read uploaded file
        file_bytes = await file.read()

        if not file_bytes:
            raise HTTPException(
                status_code=400,
                detail="Uploaded file is empty."
            )

        # 4. Extract text from PDF or DOCX
        try:
            if filename.endswith(".pdf"):
                with fitz.open(
                    stream=file_bytes,
                    filetype="pdf"
                ) as pdf:
                    resume_text = "\n".join(
                        page.get_text() for page in pdf
                    )

            else:
                document = Document(BytesIO(file_bytes))
                resume_text = "\n".join(
                    paragraph.text
                    for paragraph in document.paragraphs
                )

        except Exception:
            raise HTTPException(
                status_code=400,
                detail="Unable to read this file. Please upload a valid PDF or DOCX resume."
            )

        # 5. Validate extracted text
        if not resume_text.strip():
            raise HTTPException(
                status_code=400,
                detail="No readable text found in the resume."
            )

        # 6. Analyze skill gap
        result = analyze_skill_gap(resume_text, target_role)

        if "error" in result:
            raise HTTPException(
                status_code=400,
                detail=result
            )

        return result

    except HTTPException:
        raise

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Something went wrong while analyzing the resume."
        )
