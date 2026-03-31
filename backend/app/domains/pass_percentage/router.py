from fastapi import APIRouter

router = APIRouter()

@router.get("/exam/2")
def get_pass_percentage():
    return [
        {
            "department": "CS",
            "data": [
                {"category": "Pass", "value": 85},
                {"category": "Fail", "value": 15}
            ]
        },
        {
            "department": "IT",
            "data": [
                {"category": "Pass", "value": 75},
                {"category": "Fail", "value": 25}
            ]
        },
        {
            "department": "ECE",
            "data": [
                {"category": "Pass", "value": 90},
                {"category": "Fail", "value": 10}
            ]
        }
    ]