from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from app.api.router import router

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)
# Root (for testing)
@app.get("/")
def root():
    return {"message": "API running"}

# Data model
class ReadmittedStudent(BaseModel):
    category: str
    value: int

# 👉 THIS is your internship API (you are creating it)
@app.get("/api/admission/readmitted-students", response_model=List[ReadmittedStudent])
def get_readmitted_students():
    return [
        {"category": "2021", "value": 10},
        {"category": "2022", "value": 60},
        {"category": "2023", "value": 50},
        {"category": "2024", "value": 80}
    ]