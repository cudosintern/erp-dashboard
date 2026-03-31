import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Dashboard from "../pages/Dashboard";
import ReadmittedStudentsWidget from "../components/ReadmittedStudentsWidget";
import StockGaugeWidget from "../components/StockGaugeWidget";
import CudosWidget from "../components/CudosWidget";
import AdmissionTrendWidget from "../components/AdmissionTrendWidget";
import FeeWidget from "../components/FeeWidget";
import LmsWidget from "../components/LmsWidget";
import AdmissionIntakeWidget from "../components/AdmissionIntakeWidget";
import ExamPassWidget from "../components/ExamPassWidget";
import CudosRadarWidget from "../components/CudosRadarWidget";
import CancelledAdmissionsWidget from "../components/CancelledAdmissionsWidget";
import FeeRefundWidget from "../components/FeeRefundWidget";
import DvsTrendWidget from "../components/DvsTrendWidget";
import AdmissionSourceWidget from "../components/AdmissionSourceWidget";
import QPBankWidget from "../components/QPBankWidget";
import LmsTrendWidget from "../components/LmsTrendWidget";
import TotalAdmissionCard from "../components/Total_admission";
import Fee_Pending from "../components/Fee_Pending";
import Fee_Collection_Trend from "../components/Fee_Collection_Trend";
import Active_Users from "../components/Active_Users";
import Course_Performance from "../components/Course_Performance";
import Seat_Matrix from "../components/Seat_Matrix";
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
import Exam_Fee_Collected from "../components/Exam_Fee_Collected";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 ml-64 bg-blend-hue min-h-screen">

          {/* Top Navbar */}
          <Navbar />

          {/* Routes */}
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/readmitted" element={<ReadmittedStudentsWidget />} />
              <Route path="/stock" element={<StockGaugeWidget />} />
              <Route path="/cudos" element={<CudosWidget />} />
              <Route path="/admission-trend" element={<AdmissionTrendWidget />} />
              <Route path="/fee" element={<FeeWidget/>} />
              <Route path="/lms" element={<LmsWidget />} />
              <Route path="/admission-intake" element={<AdmissionIntakeWidget />} />
              <Route path="/Exam_pass" element={<ExamPassWidget />} />
              <Route path="/peo" element={<CudosRadarWidget/>} />
              <Route path="/cancelled" element={<CancelledAdmissionsWidget/>} />
              <Route path="/fee_refund" element={<FeeRefundWidget/>} />
              <Route path="/course" element={<DvsTrendWidget/>} /> 
              <Route path="/admission-source" element={<AdmissionSourceWidget/>} /> 
              <Route path="/bankindicator" element={<QPBankWidget/>} /> 
              <Route path="/lmstrend" element={<LmsTrendWidget />} /> 
              <Route path="/total-admission" element={<TotalAdmissionCard/>} />
              <Route path="/fee-pending" element={<Fee_Pending/>} />
              <Route path="/active-users" element={<Active_Users/>} />
              <Route path="/fee-collection" element={<Fee_Collection_Trend/>} />
              <Route path="/course-performance" element={<Course_Performance/>} />
              <Route path="/seat-matrix" element={<Seat_Matrix/>}/>
              <Route path="/exam-fee" element={<Exam_Fee_Collected/>}/>
              <Route path="/exam-registered" element={<Stud_Admitted_vs_Registered/>} />
              <Route path="/courses-count" element={<Courses_Count/>} />
              <Route path="/fee-breakdown" element={<Fee_Breakdown/>} />
              <Route path="/toppers" element={<Top_Performers/>}/>
              <Route path="/event-scripts" element={<Event_Scripts/>}/>
              <Route path="/admission-date" element={<Admissions_by_Date_Range/>}/>
              <Route path="/scholarships" element={<Scholarship_Students/>}/>
              <Route path="/valuation" element={<Valuation_Progress/>}/>
              <Route path="/malpractice" element={<Malpractice_Cases/>}/>
              <Route path="/co-po" element={<CO_PO_Strength/>}/>
              <Route path="/performance-score" element={<Performance_Score/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;