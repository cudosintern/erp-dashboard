from fastapi import APIRouter, Query

router = APIRouter()

@router.get("/lms/5")
def get_lms_trend(type: str = Query("student")):
    # mock data (same for now)
    return [
        {"date": "2023-01", "value": 75},
        {"date": "2023-02", "value": 80},
        {"date": "2023-03", "value": 78},
        {"date": "2023-04", "value": 85},
        {"date": "2023-05", "value": 90}
    ]