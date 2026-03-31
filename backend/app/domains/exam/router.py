from fastapi import APIRouter

router = APIRouter()

@router.get("/exam/8")
def get_stock():
    return [
        {"name": "Answer Book", "value": 75, "min": 0, "max": 100},
        {"name": "Grade Card", "value": 40, "min": 0, "max": 100}
    ]