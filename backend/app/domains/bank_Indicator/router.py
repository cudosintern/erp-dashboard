from fastapi import APIRouter

router = APIRouter()

@router.get("/exam/9")
def get_admission_sources():
    return [
        {"category": "Social Media", "value": 200},
        {"category": "Walk-ins", "value": 120},
        {"category": "Referrals", "value": 90},
        {"category": "Website", "value": 150}
    ]