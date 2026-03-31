
from fastapi import APIRouter
from app.domains.exam.router import router as exam_router
from app.domains.cudos.router import router as cudos_router
from app.domains.admission.router import router as admission_router
from app.domains.fee.router import router as fee_router
from app.domains.lms.router import router as lms_router
from app.domains.student_intake_vs_admitted.router import router as intake_router
from app.domains.pass_percentage.router import router as pass_router
from app.domains.PEO_Attainment.router import router as peo_router
from app.domains.cancelled_Admissions.router import router as cancelled_router
from app.domains.Fee_Refund_Cancelled.router import router as fee_refund_router
from app.domains.dvs.router import router as dvs_router
from app.domains.admissions_via_social_media.router import router as social_router
from app.domains.bank_Indicator.router import router as bank_router
from app.domains.score_trend.router import router as score_trend_router

router = APIRouter()   # ✅ REQUIRED

router.include_router(cudos_router, prefix="/api")
router.include_router(exam_router, prefix="/api")
router.include_router(admission_router, prefix="/api")
router.include_router(fee_router, prefix="/api")
router.include_router(lms_router, prefix="/api")
router.include_router(intake_router, prefix="/api")
router.include_router(pass_router, prefix="/api")
router.include_router(peo_router, prefix="/api")
router.include_router(cancelled_router, prefix="/api")
router.include_router(fee_refund_router, prefix="/api")
router.include_router(dvs_router, prefix="/api")
router.include_router(bank_router, prefix="/api")
router.include_router(social_router, prefix="/api")
router.include_router(score_trend_router, prefix="/api")

