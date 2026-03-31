from fastapi import APIRouter

router = APIRouter()

@router.get("/fee/3")
def get_fee_data():
    return [
        {"group": "Jan", "v1": 100, "v2": 80},
        {"group": "Feb", "v1": 120, "v2": 90},
        {"group": "Mar", "v1": 150, "v2": 110},
        {"group": "Apr", "v1": 130, "v2": 100}
    ]