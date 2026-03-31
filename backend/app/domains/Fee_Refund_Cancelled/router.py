from fastapi import APIRouter

router = APIRouter()

@router.get("/fee/5")
def get_fee_refunds():
    return [
        {"category": "CS", "value": 50},
        {"category": "IT", "value": 30},
        {"category": "ECE", "value": 20},
        {"category": "ME", "value": 10}
    ]