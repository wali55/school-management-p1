# 🏫 School Management System

A full-stack school management web application built with **Next.js**, **Prisma**, **PostgreSQL**, **Tailwind CSS**, and **Clerk** for authentication and user role management. This app features role-based dashboards for **Admin**, **Teachers**, **Students**, and **Parents**, complete with dynamic tables and animated charts.

---

## 🚀 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, TypeScript
- **Backend:** Next.js API routes, Prisma ORM, PostgreSQL
- **Authentication:** Clerk (with role-based access control)
- **Deployment:** Vercel 
- **Other Features:** Responsive UI, Dynamic Tables, Animated Charts

---

## 👥 User Roles

- **Admin:** Full access to manage users, classes, results, announcements, and reports.
- **Teacher:** Manage class schedules, student results, attendance.
- **Student:** View personal info, results, class routines.
- **Parent:** Monitor student performance, attendance.

---

## 🔐 Authentication & Authorization

- **Clerk** handles secure authentication.
- Role-based authorization ensures each user only accesses their own dashboard and data.

---

## 🛠️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/wali55/school-management-p1.git
cd school-management-p1

# 2. Install dependencies
npm install

# 3. Set environment variables
cp .env.example .env
# Update DATABASE_URL (PostgreSQL), CLERK_API_KEYS, etc.

# 4. Push schema to DB & run migrations
npx prisma migrate dev --name init

# 5. Run development server
npm run dev
