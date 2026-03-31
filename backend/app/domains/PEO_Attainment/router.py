from fastapi import APIRouter

router = APIRouter()

@router.get("/cudos/3")
def get_cudos_radar():
    return [
        {"subject": "PO1", "score": 80},
        {"subject": "PO2", "score": 75},
        {"subject": "PO3", "score": 90},
        {"subject": "PO4", "score": 70},
        {"subject": "PO5", "score": 85},
        {"subject": "PO6", "score": 78}
    ]