from fastapi import APIRouter, Query

router = APIRouter()

@router.get("/admission/9")
def get_cancelled_admissions(
    start_date: str = Query(None),
    end_date: str = Query(None)
):
    # 👉 For now mock logic (you can later connect DB)

    return [
        {
            "label": "Cancelled",
            "value": 15,
            "start_date": start_date,
            "end_date": end_date
        }
    ]