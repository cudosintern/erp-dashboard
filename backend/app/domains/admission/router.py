from fastapi import APIRouter

router = APIRouter()

@router.get("/admission/3")
def get_admission_trend(type: str = "rank"):
    if type == "rank":
        return [
            {"date": "2018-10", "value": 142},
            {"date": "2019-10", "value": 185},
            {"date": "2020-10", "value": 210},
            {"date": "2021-10", "value": 275},
            {"date": "2022-10", "value": 315},
            {"date": "2023-10", "value": 390},
            {"date": "2024-10", "value": 425}
            ]
    elif type == "region":
        return [
            {"date": "2018-10", "value": 80},
            {"date": "2019-10", "value": 110},
            {"date": "2020-10", "value": 95},
            {"date": "2021-10", "value": 130},
            {"date": "2022-10", "value": 165},
            {"date": "2023-10", "value": 190},
            {"date": "2024-10", "value": 215},
            {"date": "2025-10", "value": 240}
            ]
    elif type == "gender":
        return [
            {"date": "2018-10", "value": 210},
            {"date": "2019-10", "value": 345},
            {"date": "2020-10", "value": 290},
            {"date": "2021-10", "value": 415},
            {"date": "2022-10", "value": 560},
            {"date": "2023-10", "value": 725},
            {"date": "2024-10", "value": 890}
            ]