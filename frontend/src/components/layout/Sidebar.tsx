import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    items: [{ name: "Overview", path: "/" }],
  },

  // 🎓 Admission
  {
    title: "Admission",
    items: [
      { name: "Readmitted Students", path: "/readmitted" },
      { name: "Admission Trend", path: "/admission-trend" },
      { name: "Students Intake vs Admitted", path: "/admission-intake" },
      { name: "Cancelled Admissions", path: "/cancelled" },
      { name: "Admission by Source", path: "/admission-source" },
      { name: "Total Admission", path: "/total-admission" },
      { name: "Seat Matrix", path: "/seat-matrix" },
      { name: "Admissions by Date Range", path: "/admission-date" },
      { name: "Scholarship Students", path: "/scholarships" },
    ],
  },

  // 📝 Exam Management
  {
    title: "Exam Management",
    items: [
      { name: "Stock Indicator", path: "/stock" },
      { name: "Pass Percentage", path: "/exam_pass" },
      { name: "QP Bank Indicator", path: "/bankindicator" },
      { name: "Admitted vs Registered", path: "/exam-registered" },
      { name: "Top Performers", path: "/toppers" },
      { name: "Exam Fee Status", path: "/exam-fee" },
      { name: "Valuation Progress", path: "/valuation" },
      { name: "Malpractice Cases", path: "/malpractice" },
    ],
  },

  // 💰 Fee Management
  {
    title: "Fee Management",
    items: [
      { name: "Fee Target", path: "/fee" }, // kept
      { name: "Fee Refund / Cancelled", path: "/fee_refund" }, // kept
      { name: "Fee Pending", path: "/fee-pending" },
      { name: "Fee Collection Trend", path: "/fee-collection" },
      { name: "Fee Breakdown", path: "/fee-breakdown" },
    ],
  },

  // 📚 LMS
  {
    title: "LMS",
    items: [
      { name: "Overall Performance", path: "/lms" }, // kept
      { name: "Score Trend", path: "/lmstrend" }, // kept
      { name: "Course Performance", path: "/course-performance" },
      { name: "Performance Score", path: "/performance-score" },
    ],
  },

  // 📊 CUDOS
  {
    title: "CUDOS",
    items: [
      { name: "Activity Percentage", path: "/cudos" }, // kept
      { name: "PO/PEO Attainment", path: "/peo" }, // kept
      { name: "Courses Count", path: "/courses-count" },
      { name: "CO-PO Strength", path: "/co-po" },
    ],
  },

  // 📈 DVS
  {
    title: "DVS",
    items: [
      { name: "Evaluation Trend", path: "/course" }, // kept
      { name: "Active Users", path: "/active-users" },
      { name: "Event Scripts", path: "/event-scripts" },
    ],
  },
];

export default function Sidebar() {
const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed overflow-y-auto">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        <a href="/">ERP Dashboard</a>
      </div>

      <nav className="mt-4 space-y-2 px-2">
        {navigation.map((section) => (
          <div key={section.title}>
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700 rounded-md flex justify-between items-center"
            >
              {section.title}
              <span>
                {openSection === section.title ? "▲" : "▼"}
              </span>
            </button>

            {/* Dropdown Items */}
            {openSection === section.title && (
              <div className="ml-4 mt-1 space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } block rounded-md px-3 py-2 text-sm`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}