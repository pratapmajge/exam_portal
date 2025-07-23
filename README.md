# 🎓 Online Examination Portal

A secure, scalable, and modern Online Exam Portal built with the MERN stack. This platform is designed for smooth examination conduction with real-time proctoring, OTP-based login, and a responsive user interface.

## 🚀 Features

- ✅ **Email OTP Verification** for secure login
- 📷 **Proctoring Support** for online monitoring (via webcam or activity tracking)
- ⏳ **Exam Timer & Auto-Submission**
- 🧪 **Dynamic MCQ Questions**
- 🔒 **Secure Authentication** (JWT-based)
- 📊 **Instant Score Calculation & Result Generation**
- 🧑‍🏫 **Admin Panel** for managing exams & users
- 🧑‍🎓 **Student Dashboard** to view assigned exams and results
- 💬 **Alerts & Notifications**

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS / Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, Bcrypt, Email-based OTP
- **Other Tools:** Nodemailer, Multer, dotenv

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/exam-portal.git

# Navigate to project folder
cd exam-portal

# Install dependencies for both frontend and backend
cd backend && npm install
cd ../frontend && npm install

# Create .env files for backend and frontend as needed

# Run the development servers
cd backend && npm run dev
cd ../frontend && npm start
