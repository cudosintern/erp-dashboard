# ERP-Dashboard
Project Setup & Run Instructions
Frontend (React / Vite)

      cd frontend 
      
      npm install
      
      npm run dev

(Runs the frontend development server.)

Backend (FastAPI)

      cd backend
      
      pip install -r requirements.txt
      
      python -m uvicorn app.main:app --reload

Starts the FastAPI backend server with auto-reload.

Widget Mock API (Node.js)

      cd widget-mock-api
      
      npm install
      
      nodemon index.js

Default Ports
Frontend → http://localhost:5173
Backend → http://localhost:8000
Mock API → http://localhost:5000

Frontend: React (Vite)
Backend: FastAPI (Python)
Mock API: Node.js (Express)
