# Medical Store Management System

<div align="center">

![MERN Stack](https://img.shields.io/badge/Stack-MERN-0ea5e9?style=for-the-badge)
![React + Vite](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-22c55e?style=for-the-badge)
![Express + MongoDB](https://img.shields.io/badge/Backend-Express%20%2B%20MongoDB-f97316?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Runtime-Node.js%2018-339933?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-13aa52?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-a855f7?style=for-the-badge)

**A comprehensive, production-grade pharmacy management system built with the MERN stack.**

</div>

---

## 📋 Overview

**Medical Store Management System** is an enterprise-level pharmacy operations platform designed for modern retail environments. It provides end-to-end solutions for managing medicines inventory, supplier relationships, customer interactions, billing cycles, Point-of-Sale (POS) operations, and complete audit trails.

Built with separation of concerns in mind, the system separates **Backend** (REST API) and **Frontend** (React UI) for independent deployment and scalability on Vercel.

## ✨ Key Features

### 🔐 Security & Access Control
- JWT-based authentication with secure password hashing (bcrypt)
- Role-based access control (Admin/Staff)
- Section-level permissions for granular feature access
- Immutable activity logs for complete audit trail
- Secure API routes with middleware protection

### 📦 Inventory Management
- Medicine database with stock tracking
- Real-time stock levels and threshold alerts
- Supplier management with purchase history
- Purchase workflows with automatic stock updates
- Stock reconciliation and variance reporting

### 💳 Sales & Billing
- Point-of-Sale (POS) system with invoice generation
- Customer management with purchase history
- Comprehensive bill editing with stock rollback
- Print-ready invoice formatting
- Sales reports and analytics

### 📊 Reporting & Analytics
- Dashboard with key metrics and KPIs
- Filtered reporting modules
- Activity logs with full data-change audits
- Performance metrics and trends
- Exportable reports

### 🔍 Audit & Compliance
- Immutable activity logs (no delete operations)
- Auth event tracking and login history
- Complete data change audit trail
- Timestamp tracking for all operations
- Compliance-ready logging system

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.x | UI library and component framework |
| **Vite** | 8.x | Next-generation build tool and dev server |
| **React Router** | 7.x | Client-side routing and navigation |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **Axios** | 1.x | HTTP client for API requests |
| **Lucide React** | Latest | Icon library |
| **React-to-Print** | 3.x | Invoice/receipt printing support |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 18.x | JavaScript runtime environment |
| **Express.js** | 5.x | Web application framework |
| **MongoDB** | 9.x | NoSQL document database |
| **Mongoose** | 9.x | MongoDB object modeling |
| **Joi** | 18.x | Data validation library |
| **JWT** | 9.x | Authentication tokens |
| **bcrypt** | 6.x | Password hashing library |
| **CORS** | 2.x | Cross-Origin Resource Sharing middleware |
| **dotenv** | 17.x | Environment variable management |

### Deployment
| Service | Purpose |
|---------|---------|
| **Vercel** | Hosting (Frontend & Backend separately) |
| **MongoDB Atlas** | Cloud database hosting |
| **Git/GitHub** | Version control |

## 📁 Project Structure

```
Medical-Store-Management-System/
│
├── Backend/
│   ├── api/
│   │   └── index.js                 # Vercel serverless entry point
│   ├── controllers/                 # Business logic controllers
│   │   ├── authController.js
│   │   ├── medicineController.js
│   │   ├── saleController.js
│   │   ├── purchaseController.js
│   │   ├── supplierController.js
│   │   ├── customerController.js
│   │   ├── userController.js
│   │   ├── reportController.js
│   │   └── logController.js
│   ├── middleware/
│   │   ├── auth.js                  # JWT authentication middleware
│   │   └── activityLogger.js        # Activity tracking middleware
│   ├── models/                      # Mongoose schemas
│   │   ├── User.js
│   │   ├── Medicine.js
│   │   ├── Sale.js
│   │   ├── Purchase.js
│   │   ├── Supplier.js
│   │   ├── Customer.js
│   │   └── Log.js
│   ├── routes/                      # API route definitions
│   ├── data/                        # Seed data and constants
│   ├── scripts/                     # Database seed scripts
│   ├── services/                    # Business services
│   ├── utils/                       # Utility functions
│   ├── app.js                       # Express app configuration
│   ├── server.js                    # Server startup
│   ├── vercel.json                  # Vercel deployment config
│   ├── package.json
│   └── .env.example
│
├── Frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── client.js            # Axios instance with interceptors
│   │   │   └── services.js          # API service methods
│   │   ├── components/
│   │   │   └── AppErrorBoundary.jsx # Error handling boundary
│   │   ├── context/
│   │   │   ├── AuthContext.jsx      # Authentication context
│   │   │   └── MedicineContext.jsx  # Medicine context
│   │   ├── constants/
│   │   │   └── appSections.js       # App configuration
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx  # Main layout component
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Medicines.jsx
│   │   │   ├── POS.jsx
│   │   │   ├── Bills.jsx
│   │   │   ├── Purchases.jsx
│   │   │   ├── Suppliers.jsx
│   │   │   ├── Customers.jsx
│   │   │   ├── Reports.jsx
│   │   │   ├── AdminUsers.jsx
│   │   │   └── Logs.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vercel.json                  # Vercel deployment config
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind CSS config
│   ├── package.json
│   └── .env.example
│
├── LICENSE
├── README.md                        # This file
├── .gitignore
├── DEPLOYMENT_GUIDE.md              # Detailed deployment instructions
├── VERCEL_QUICK_REFERENCE.md        # Quick deployment reference
├── DEPLOYMENT_CHECKLIST.md          # Pre-deployment checklist
├── ENV_VARIABLES_COPY_PASTE.md      # Environment variables guide
└── MERN_DEPLOYMENT_COMPLETE.md      # Deployment completion summary
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (comes with Node.js)
- **Git** for version control
- **MongoDB Atlas** account (or local MongoDB instance)

### Local Development Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/LeGeND212L/ITSOLERA_Task_3.git
cd ITSOLERA_Task_3
```

#### 2️⃣ Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` directory (use `Backend/.env.example` as template):

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/medical-store
FRONTEND_URL=http://localhost:5173
CORS_ORIGINS=http://localhost:5173
AUTO_SEED_ON_STARTUP=true
ENSURE_ADMIN_ON_STARTUP=true
```

Start the backend server:

```bash
npm run dev
```

**Backend will run at**: `http://localhost:5000`

#### 3️⃣ Frontend Setup

Open a **new terminal** and navigate to the frontend directory:

```bash
cd Frontend
npm install
```

Create a `.env` file in the `Frontend/` directory (use `Frontend/.env.example` as template):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

**Frontend will run at**: `http://localhost:5173` (or the URL shown in terminal)

#### 4️⃣ Access the Application

1. Open your browser and navigate to `http://localhost:5173`
2. Login with default credentials:
   - **Username**: `Admin`
   - **Password**: `Admin123@`
3. ⚠️ **Important**: Change the admin password after first login in production

### Database Seeding

The system includes seed scripts for demo data. To seed the database:

#### Seed Medicines:
```bash
cd Backend
npm run seed:medicines
```

#### Seed Business Data (Suppliers, Customers, Purchases):
```bash
npm run seed:business
```

## 📜 Available Scripts

### Backend Scripts (`Backend/package.json`)

| Script | Command | Description |
|--------|---------|-------------|
| **start** | `npm start` | Start API server (production mode) |
| **dev** | `npm run dev` | Start API server (development mode) |
| **seed:medicines** | `npm run seed:medicines` | Seed medicine records into database |
| **seed:business** | `npm run seed:business` | Seed suppliers, customers, and purchases |
| **test** | `npm test` | Run test suite (if available) |

### Frontend Scripts (`Frontend/package.json`)

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `npm run dev` | Start Vite development server on port 5173 |
| **build** | `npm run build` | Build optimized production bundle |
| **build:prod** | `npm run build:prod` | Build with production optimizations |
| **preview** | `npm run preview` | Preview production build locally |
| **start** | `npm start` | Alias for `npm run dev` |
| **test** | `npm test` | Run test suite (if available) |

## 📦 Core Modules

| Module | Description | Features |
|--------|-------------|----------|
| **Dashboard** | System overview and KPIs | Key metrics, quick stats, navigation |
| **Medicines** | Medicine inventory management | Add/edit/delete, stock tracking, alerts |
| **POS** | Point of Sale system | Cart management, invoice generation, print |
| **Bills** | Invoice and bill management | View, edit, delete, stock reconciliation |
| **Purchases** | Supplier order tracking | Create, track, receive purchase orders |
| **Suppliers** | Supplier information management | Contact details, purchase history |
| **Customers** | Customer information management | Contact details, purchase history |
| **Reports** | Analytics and reporting | Filtered reports, export data |
| **Admin Users** | User access management | Create/edit/delete users, role assignment |
| **Logs** | Immutable audit trail | Activity log, login history, data changes |

## 🔒 Security & Audit

### Authentication & Authorization
- Passwords hashed using **bcrypt** (industry-standard)
- API routes protected with **JWT middleware**
- Role-based access control (Admin/Staff)
- Section-level permissions for feature-specific access
- Session management and token validation

### Audit & Compliance
- **Immutable activity logs** - no delete operations allowed
- Comprehensive audit trail of all data changes
- Authentication event tracking (login/logout)
- Timestamp tracking for all operations
- User action attribution for accountability
- Data change audits with before/after values

### Best Practices Implemented
- Environment variables for sensitive configuration
- CORS protection with configurable origins
- Input validation using Joi schema validation
- Password policy enforcement
- Error handling without stack trace exposure in production
- Database connection pooling for security and performance

## 🚀 Deployment

### Development Deployment

This project is production-ready and configured for cloud deployment on **Vercel** with separate frontend and backend deployments.

### Production Deployment on Vercel

The project includes comprehensive deployment documentation:

1. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete step-by-step guide
2. **[VERCEL_QUICK_REFERENCE.md](./VERCEL_QUICK_REFERENCE.md)** - Quick reference and commands
3. **[ENV_VARIABLES_COPY_PASTE.md](./ENV_VARIABLES_COPY_PASTE.md)** - Copy-paste environment variables
4. **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre-deployment checklist

### Quick Deployment Summary

#### Backend Deployment

1. Create MongoDB Atlas cluster (free tier available)
2. Create Vercel project with `Backend/` as root directory
3. Set 11 environment variables (see deployment docs)
4. Deploy and note the backend URL

```bash
# Environment variables for Vercel Backend
NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_connection_string
FRONTEND_URL=https://your-frontend.vercel.app
CORS_ORIGINS=https://your-frontend.vercel.app
# ... (see ENV_VARIABLES_COPY_PASTE.md for all variables)
```

#### Frontend Deployment

1. Create Vercel project with `Frontend/` as root directory
2. Set 4 environment variables (including backend API URL)
3. Deploy using auto-detected Vite configuration

```bash
# Environment variables for Vercel Frontend
VITE_API_BASE_URL=https://your-backend.vercel.app/api
VITE_APP_ENV=production
VITE_APP_NAME=Medical Store Management System
VITE_API_TIMEOUT=15000
```

### Deployment Architecture

```
┌─────────────────┐
│   Frontend      │
│   (Vercel SPA)  │
└────────┬────────┘
         │ HTTPS
         ↓
┌─────────────────┐
│   Backend API   │
│  (Vercel Node)  │
└────────┬────────┘
         │ Connection Pool
         ↓
┌─────────────────┐
│  MongoDB Atlas  │
│   (Database)    │
└─────────────────┘
```

### Additional Deployment Options

- **Frontend**: Vercel, Netlify, AWS S3 + CloudFront, Firebase
- **Backend**: Vercel (serverless), Render, Railway, AWS Lambda, Heroku
- **Database**: MongoDB Atlas (recommended), AWS DocumentDB, self-hosted MongoDB

### Environment Configuration

See `.env.example` files in both `Backend/` and `Frontend/` directories for required variables.

For detailed deployment instructions, refer to **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository on GitHub
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request with a clear description

### Guidelines

- Follow existing code style and conventions
- Add comments for complex logic
- Update README if adding new features
- Test changes locally before submitting PR
- Keep commits atomic and well-documented

## 📝 API Documentation

### Base URL
```
http://localhost:5000/api          (Development)
https://your-backend.vercel.app/api (Production)
```

### Key Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

#### Medicines
- `GET /api/medicines` - List all medicines
- `POST /api/medicines` - Create new medicine
- `GET /api/medicines/:id` - Get medicine details
- `PUT /api/medicines/:id` - Update medicine
- `DELETE /api/medicines/:id` - Delete medicine

#### Sales
- `GET /api/sales` - List all sales
- `POST /api/sales` - Create new sale
- `GET /api/sales/:id` - Get sale details
- `PUT /api/sales/:id` - Update sale
- `DELETE /api/sales/:id` - Delete sale

#### Purchases
- `GET /api/purchases` - List all purchases
- `POST /api/purchases` - Create new purchase
- `GET /api/purchases/:id` - Get purchase details
- `PUT /api/purchases/:id` - Update purchase
- `DELETE /api/purchases/:id` - Delete purchase

#### Reports
- `GET /api/reports/dashboard` - Dashboard metrics
- `GET /api/reports/medicines` - Medicine reports
- `GET /api/reports/sales` - Sales reports
- `GET /api/reports/purchases` - Purchase reports

#### Logs
- `GET /api/logs` - Get activity logs
- `GET /api/logs/user/:userId` - Get user activity

For complete API documentation, refer to the route files in `Backend/routes/`.

## 📚 Additional Resources

- **[Node.js Documentation](https://nodejs.org/en/docs/)** - Official Node.js docs
- **[Express.js Guide](https://expressjs.com/)** - Express framework docs
- **[MongoDB Documentation](https://docs.mongodb.com/)** - MongoDB guides
- **[React Documentation](https://react.dev/)** - React official docs
- **[Vite Guide](https://vitejs.dev/)** - Vite build tool documentation

## 🐛 Known Issues

Currently, there are no known issues. If you encounter any problems, please open an issue on GitHub with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

## 💬 Support & Contact

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and general support
- **Email**: Contact project maintainers via GitHub profile

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](./LICENSE) file for details.

---

## 🎉 Acknowledgments

### Technologies Used
- The MERN community for excellent tools and frameworks
- MongoDB for reliable database solutions
- Vercel for seamless deployment platform
- All open-source contributors

### Testing & Quality
- Peer reviewed for security best practices
- Production-grade error handling
- Industry-standard authentication and authorization
- Comprehensive audit logging

---

<div align="center">

### Made with ❤️ for the Community

**Developed for ITSOLERA Internship - Task 3**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/LeGeND212L/ITSOLERA_Task_3)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-00ED64?style=for-the-badge&logo=mongodb)](https://www.mongodb.com)

**Last Updated**: March 30, 2026

</div>
