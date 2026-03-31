from fastapi import APIRouter

router = APIRouter()

@router.get("/lms/2")
def get_lms_performance():
    return [
        {"category": "Batch A", "value": 70},
        {"category": "Batch B", "value": 85},
        {"category": "Batch C", "value": 60},
        {"category": "Batch D", "value": 90}
    ]