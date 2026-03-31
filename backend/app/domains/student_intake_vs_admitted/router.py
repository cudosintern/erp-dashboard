from fastapi import APIRouter

router = APIRouter()

@router.get("/admission/7")
def get_intake_vs_admitted():
    return [
        {"group": "CS", "v1": 100, "v2": 80},
        {"group": "IT", "v1": 90, "v2": 70},
        {"group": "ECE", "v1": 120, "v2": 110},
        {"group": "ME", "v1": 80, "v2": 60}
    ]