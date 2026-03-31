import ReadmittedStudentsWidget from "../components/ReadmittedStudentsWidget";
import StockGaugeWidget from "../components/StockGaugeWidget";
import CudosWidget from "../components/CudosWidget";
import AdmissionTrendWidget from "../components/AdmissionTrendWidget";
import FeeWidget from "../components/FeeWidget";
import LmsWidget from "../components/LmsWidget";
import ExamPassWidget from "../components/ExamPassWidget";
import CudosRadarWidget from "../components/CudosRadarWidget";
import CancelledAdmissionsWidget from "../components/CancelledAdmissionsWidget";
import FeeRefundWidget from "../components/FeeRefundWidget";
import DvsTrendWidget from "../components/DvsTrendWidget";
import AdmissionSourceWidget from "../components/AdmissionSourceWidget";
import AdmissionIntakeWidget from "../components/AdmissionIntakeWidget";
import QPBankWidget from "../components/QPBankWidget";
import LmsTrendWidget from "../components/LmsTrendWidget";
import TotalAdmissionCard from "../components/Total_admission";
import FeePendingWidget from "../components/Fee_Pending";
import Active_Users from "../components/Active_Users";
import Fee_Collection_Trend from "../components/Fee_Collection_Trend";
import Course_Performance from "../components/Course_Performance";
import Seat_Matrix from "../components/Seat_Matrix";
import Exam_Fee_Collected from "../components/Exam_Fee_Collected";
import Stud_Admitted_vs_Registered from "../components/Stud_Admitted_vs_Registered";
import Courses_Count from "../components/Courses_Count";
import Fee_Breakdown from "../components/Fee_Breakdown";
import Top_Performers from "../components/Top_Performers";
import Event_Scripts from "../components/Event_Scripts";
import Admissions_by_Date_Range from "../components/Admissions_by_Date_Range";
import Scholarship_Students from "../components/Scholarship_Students";
import Valuation_Progress from "../components/Valuation_Progress";
import Malpractice_Cases from "../components/Malpractice_Cases";
import CO_PO_Strength from "../components/CO_PO_Strength";
import Performance_Score from "../components/Performance_Score";
import { BookOpen } from "lucide-react";

export default function Dashboard() {
  const Card = ({ children, link }: { children: any; link: string }) => (
  <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
    <a href={link}>{children}</a>
  </div>
);

const Section = ({ title, children }: { title: string; children: any }) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">ERP Dashboard</h1>

      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 px-4 py-2 bg-blue-100 rounded-lg"><BookOpen size={20} />Admission Management</h2>
      
      {/* 🎓 Admission */}
      <Section title="">
        <Card link="/total-admission"><TotalAdmissionCard /></Card>
        <Card link="/admission-trend"><AdmissionTrendWidget /></Card>
        <Card link="/admission-intake"><AdmissionIntakeWidget /></Card>
        <Card link="/admission-source"><AdmissionSourceWidget /></Card>
        <Card link="/cancelled"><CancelledAdmissionsWidget /></Card>
        <Card link="/admission-date"><Admissions_by_Date_Range /></Card>
        <Card link="/exam-registered"><Stud_Admitted_vs_Registered /></Card>
        <Card link="/scholarships"><Scholarship_Students /></Card>
      </Section>
      
      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 px-4 py-2 bg-blue-100 rounded-lg"><BookOpen size={20} />Exam Management</h2>      
      {/* 📝 Exams */}
      <Section title="">
        <Card link="/Exam_pass"><ExamPassWidget /></Card>
        <Card link="/bankindicator"><QPBankWidget /></Card>
        <Card link="/valuation"><Valuation_Progress /></Card>
        <Card link="/malpractice"><Malpractice_Cases /></Card>
      </Section>

      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 px-4 py-2 bg-blue-100 rounded-lg"><BookOpen size={20} />Fee Management</h2>
      {/* 💰 Finance */}
      <Section title="">
        <Card link="/fee"><FeeWidget /></Card>
        <Card link="/fee-pending"><FeePendingWidget /></Card>
        <Card link="/fee_refund"><FeeRefundWidget /></Card>
        <Card link="/fee-collection"><Fee_Collection_Trend /></Card>
        <Card link="/fee-breakdown"><Fee_Breakdown /></Card>
        <Card link="/exam-fee"><Exam_Fee_Collected /></Card>
      </Section>

      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 px-4 py-2 bg-blue-100 rounded-lg"><BookOpen size={20} />LMS Analytics</h2>

      {/* 🧠 LMS */}
      <Section title="">
        <Card link="/lms"><LmsWidget /></Card>
        <Card link="/lmstrend"><LmsTrendWidget /></Card>
        <Card link="/performance-score"><Performance_Score /></Card>
      </Section>

      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 px-4 py-2 bg-blue-100 rounded-lg"><BookOpen size={20} />Academic CUDOS</h2>

      {/* 📚 Academic */}
      <Section title="">
        <Card link="/cudos"><CudosWidget /></Card>
        <Card link="/peo"><CudosRadarWidget /></Card>
        <Card link="/course-performance"><Course_Performance /></Card>
        <Card link="/courses-count"><Courses_Count /></Card>
        <Card link="/co-po"><CO_PO_Strength /></Card>
      </Section>

      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 px-4 py-2 bg-blue-100 rounded-lg"><BookOpen size={20} />DVS</h2>

      {/* ⚙️ System */}
      <Section title="">
        <Card link="/readmitted"><ReadmittedStudentsWidget /></Card>
        <Card link="/stock"><StockGaugeWidget /></Card>
        <Card link="/active-users"><Active_Users /></Card>
        <Card link="/course"><DvsTrendWidget /></Card>
        <Card link="/seat-matrix"><Seat_Matrix /></Card>
        <Card link="/toppers"><Top_Performers /></Card>
        <Card link="/event-scripts"><Event_Scripts /></Card>
      </Section>
    </div>
  );
}
