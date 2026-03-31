from fastapi import APIRouter

router = APIRouter()

@router.get("/cudos/4")
def get_cudos():
    return [
        {"category": "Done", "value": 85},
        {"category": "Remaining", "value": 15}
    ]