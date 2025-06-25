# 🧪 Lab Test Booking Portal

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows patients to register, view available lab tests, book them, and download lab reports. Authentication is handled using JWT and `bcrypt`.

---

## 🚀 Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) + bcrypt
- **File Handling**: PDF report download via blob

---

## 📁 Folder Structure

### 🔙 Backend

```

backend/
├── controllers/
│   ├── patientController.js
│   ├── testController.js
│   └── bookingController.js
├── models/
│   ├── Patient.js
│   ├── Test.js
│   └── Booking.js
├── routes/
│   ├── patientRoutes.js
│   ├── testRoutes.js
│   └── bookingRoutes.js
├── middleware/
│   └── authMiddleware.js
├── utils/
│   └── generateToken.js
├── reports/
│   └── dummy\_report.pdf
├── server.js
└── .env

```

### 🖥️ Frontend

```

frontend/
├── src/
│   ├── pages/
│   │   ├── Register.jsx
│   │   ├── Tests.jsx
│   │   └── Bookings.jsx
│   ├── components/
│   │   └── Navbar.jsx
│   ├── api/
│   │   └── api.js
│   ├── App.js
│   └── main.jsx
├── public/
│   └── dummy\_report.pdf (optional fallback)

````

---

## 🎯 Approach

### 🧾 Authentication
- **Patients** can register and login using email/password.
- Passwords are hashed with `bcrypt`.
- On successful login/registration, a **JWT** token is generated and stored in localStorage.
- **Protected routes** (like bookings and downloading reports) are verified using middleware (`authMiddleware.js`).

### 🧪 Test Booking
- All users can view available lab tests.
- Logged-in patients can book tests.
- Each test booking is linked to a patient and a test ID.

### 📄 Report Download
- Patients can download their booked test reports as PDFs.
- A dummy file (`dummy_report.pdf`) simulates actual report generation.

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/jithu2023/SKVAP_Lab_Assignment.git
cd lab-booking-app
````

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Then start the server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Make sure the frontend calls the backend at `http://localhost:5000` (configured in `api.js`).

---

## 📡 API Endpoints

### 🔐 Auth (JWT-based)

* `POST /api/patients/register`
  Registers a new patient.
  **Body:** `{ name, email, password }`


### 📄 Tests

* `GET /api/tests`
  Returns all available lab tests.

---

### 🧾 Bookings

* `POST /api/bookings`
  Books a lab test (requires JWT).
  **Body:** `{ testId }`
  (patientId inferred from JWT)

* `GET /api/bookings`
  Gets all bookings for the logged-in user.

* `GET /api/bookings/report/`
    GET endpoint to return dummy report data as file 

---

## ⚙️ Auth Flow

* JWT token is stored in localStorage after login.
* All protected routes include `Authorization: Bearer <token>` in headers.
* Backend verifies token using middleware.

---

## ✅ Future Enhancements

* Admin Dashboard for uploading actual reports.
* Pagination and search for tests.
* Email notifications for booking confirmations.
* Role-based access control.

---

## 🧑‍💻 Author

Built by [Jithumon Jacob](https://github.com/jithu2023)

