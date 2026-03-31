const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// 👉 Admission Trend API
app.get("/api/admission/3", (req, res) => {
  res.json([
        {"category": "2021", "value": 90},
        {"category": "2022", "value": 600},
        {"category": "2023", "value": 40},
        {"category": "2024", "value": 10}
    ]);
});

app.get("/api/admission/1", (req, res) => {
  res.json([
    { "label": "Total", "value": 1500 },
    { "label": "Approved", "value": 1200 },
    { "label": "Pending", "value": 300 }
  ]);
});

//total pending fee
app.get("/api/fees/2", (req, res) => {
  const students = [     { name: "Arjun", section: "A", class: "10", pendingFee: 10000 },
    { name: "Priya", section: "B", class: "10", pendingFee: 5000 },
    { name: "Rahul", section: "A", class: "9", pendingFee: 8000 },
    { name: "Sneha", section: "C", class: "10", pendingFee: 12000 },
    { name: "Kiran", section: "B", class: "8", pendingFee: 7000 },
    { name: "Anjali", section: "A", class: "9", pendingFee: 6000 },
    { name: "Vikram", section: "C", class: "10", pendingFee: 9000 },
    { name: "Meena", section: "B", class: "8", pendingFee: 4000 },
    { name: "Ravi", section: "A", class: "10", pendingFee: 11000 },
    { name: "Pooja", section: "C", class: "9", pendingFee: 3000 }, ];

  const pendingAmount = students.reduce(
    (sum, s) => sum + s.pendingFee,
    0
  );

  return res.json({
    totalPending: pendingAmount,
    students: students
  });
});

//DVS No of Active Users
app.get("/api/dvs/3", (req, res) => {

  const users = [
    { name: "Priya", active: true },
    { name: "Rahul", active: true },
    { name: "Anjali", active: false },
    { name: "Pooja", active: true },
    { name: "Ravi", active: true },
    { name: "Sneha", active: false },
    { name: "Rahul", active: true },
    { name: "User8", active: true },
    { name: "User9", active: true },
    { name: "User10", active: true },
  ];

  const activeUsers = users.filter((u) => u.active);

  res.json({
    totalActive: activeUsers.length,
    users: users
  });
});

// API: Fee collection trend
const weekData = [
  { date: "W1", value: 150 },
  { date: "W2", value: 200 },
  { date: "W1", value: 150 },
  { date: "W2", value: 200 }
];

const monthData = [
  { date: "Jan", value: 800 },
  { date: "Feb", value: 900 },
  { date: "Jan", value: 800 },
  { date: "Feb", value: 900 }
];

const dayData = [
  { date: "Mon", value: 50 },
  { date: "Tue", value: 70 },
  { date: "Mon", value: 50 },
  { date: "Tue", value: 70 }
];

app.get("/api/fee/1/:type", (req, res) => {
  const type = req.params.type;

  if (type === "month") return res.json(monthData);
  if (type === "day") return res.json(dayData);

  return res.json(weekData);
});

//Exam Fee Collected vs Pending
app.get("/api/exam/10", (req, res) => {
    res.json([
  { group: "CS", v1: 500, v2: 50 },
  { group: "IT", v1: 450, v2: 80 },
  { group: "ECE", v1: 400, v2: 120 },
  { group: "MECH", v1: 300, v2: 150 },
  { group: "CIVIL", v1: 350, v2: 100 },
  ]);
  });

//LMS Coursewise, Lesson Performance
app.get("/api/lms/4", (req, res) => {
  res.json([
  { category: "Lesson 1", value: 70 },
  { category: "Lesson 2", value: 85 },
  { category: "Lesson 3", value: 60 },
  { category: "Lesson 4", value: 90 },
  { category: "Lesson 5", value: 75 },
  { category: "Lesson 6", value: 50 },
  { category: "Lesson 7", value: 95 },
  { category: "Lesson 8", value: 80 },
  { category: "Lesson 9", value: 65 },
  { category: "Lesson 10", value: 88 }
]);
});

//Admission Seat Matrix
app.get("/api/admission/8", (req, res) => {
  res.json([
    { branch: "CSE", filled: 60, available: 40 },
    { branch: "ECE", filled: 45, available: 55 },
    { branch: "MECH", filled: 30, available: 70 },
    { branch: "CIVIL", filled: 25, available: 75 },
    { branch: "IT", filled: 50, available: 50 }
  ]);
});


//Exam Management Students Admitted vs Registered
app.get("/api/exam/1", (req, res) => {
  res.json( [
  { group: "IT", v1: 100, v2: 95 },
  { group: "CSE", v1: 120, v2: 110 },
  { group: "ECE", v1: 90, v2: 80 },
  { group: "MECH", v1: 70, v2: 65 },
  { group: "CIVIL", v1: 60, v2: 50 }
]);
});

//CUDOS Core Courses, Electives Count
// CUDOS - Course Breakdown
app.get("/api/cudos/1", (req, res) => {
  res.json([
    { category: "Core", value: 40 },
    { category: "Electives", value: 25 },
    { category: "Labs", value: 15 },
    { category: "Projects", value: 10 },
  ]);
});

//Fee Management Tuition/Exam/Misc Fee breakdown
app.get("/api/fee/4", (req, res) => {
  res.json([
  { category: "Tuition", value: 1000 },
  { category: "Exam", value: 400 },
  { category: "Misc", value: 250 },
  { category: "Library", value: 150 },
  { category: "Transport", value: 300 }
]);
});

//Exam Management Results: Toppers, Top Department
app.get("/api/exam/4", (req, res) => {
  res.json([
    { category: "Computer Science", value: 98 },
    { category: "Information Technology", value: 95 },
    { category: "Electronics", value: 92 },
    { category: "Mechanical", value: 89 },
    { category: "Civil", value: 87 }
  ]);
});

//DVS Eventwise Scripts (Scanned, Mapped)
app.get("/api/dvs/1", (req, res) => {
  res.json([
    { group: "Event1", scanned: 100, mapped: 80 },
    { group: "Event2", scanned: 120, mapped: 90 },
    { group: "Event3", scanned: 90, mapped: 70 },
    { group: "Event4", scanned: 150, mapped: 130 }
  ]);
});

//Admission Admissions for branch between dates
const admissions = [
  { branch: "Mech", date: "2024-01-10" },
  { branch: "Mech", date: "2024-01-15" },
  { branch: "CSE", date: "2024-01-12" },
  { branch: "CSE", date: "2024-02-01" },
  { branch: "IT", date: "2024-02-05" },
  { branch: "ECE", date: "2024-02-10" },
  { branch: "Mech", date: "2024-02-12" },
];

// ✅ API: filter by date + group by branch
app.get("/api/admission/2", (req, res) => {
  const { start, end } = req.query;

  let filtered = admissions;

  if (start && end) {
    filtered = admissions.filter(
      (a) => a.date >= start && a.date <= end
    );
  }

  // group by branch
  const result = Object.values(
    filtered.reduce((acc, curr) => {
      if (!acc[curr.branch]) {
        acc[curr.branch] = { category: curr.branch, value: 0 };
      }
      acc[curr.branch].value += 1;
      return acc;
    }, {})
  );

  res.json(result);
});

//Admission Students Applied Scholarships
// Admission - Scholarship Usage
app.get("/api/admission/4", (req, res) => {
  res.json([
    { category: "Merit", value: 45 },
    { category: "Need-Based", value: 30 },
    { category: "Sports", value: 20 },
    { category: "Minority", value: 15 },
    { category: "Others", value: 10 },
  ]);
});

//Exam Management Valuation Progress
app.get("/api/exam/7", (req, res) => {
  res.json([
  {
    value: 40,   // completed valuation %
    min: 0,
    max: 100
  }
]);
});

//Exam Management Malpractice cases count
app.get("/api/exam/6", (req, res) => {
  res.json([
    { category: "Computer Science", value: 2 },
    { category: "Information Technology", value: 1 },
    { category: "Electronics", value: 3 },
    { category: "Mechanical", value: 0 },
    { category: "Civil", value: 2 }
  ]);
});
//CUDOS CO-PO Strength Batchwise
const cudosData = {
  "2022": [
    { subject: "CO1", score: 90 },
    { subject: "CO2", score: 85 },
    { subject: "CO3", score: 80 },
    { subject: "CO4", score: 75 },
    { subject: "CO5", score: 88 }
  ],
  "2023": [
    { subject: "CO1", score: 95 },
    { subject: "CO2", score: 88 },
    { subject: "CO3", score: 82 },
    { subject: "CO4", score: 78 },
    { subject: "CO5", score: 90 }
  ]
};

// ✅ API with batch filter
app.get("/api/cudos/2/:batch", (req, res) => {
  const batch = req.params.batch;
  res.json(cudosData[batch] || []);
});

//LMS Overall Performance Score
app.get("/api/lms/1", (req, res) => {
  res.json([
    { label: "Avg Score", value: 78 },
    { "label": "Top Score", "value": 95 }
  ]);
});
// 👉 Start server
app.listen(PORT, () => {
  console.log(`Mock API running on http://localhost:${PORT}`);
});