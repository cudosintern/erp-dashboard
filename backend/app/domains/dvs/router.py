from fastapi import APIRouter

router = APIRouter()

@router.get("/dvs/2")
def get_dvs_trend(course: str = "all"):
    # You can later filter based on course
    if course == "cs":
        return [
            {"date": "2023-01", "value": 100},
            {"date": "2023-02", "value": 120},
            {"date": "2023-03", "value": 140},
        ]
    elif course == "it":
        return [
            {"date": "2023-01", "value": 90},
            {"date": "2023-02", "value": 110},
            {"date": "2023-03", "value": 130},
        ]

    # Default (all courses)
    return [
        {"date": "2023-01", "value": 120},
        {"date": "2023-02", "value": 150},
        {"date": "2023-03", "value": 170},
        {"date": "2023-04", "value": 140},
        {"date": "2023-05", "value": 180},
    ]