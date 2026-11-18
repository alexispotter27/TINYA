# TINYA – Website & Membership Portal

**The Initiative for Nigerian Youths in AgroTech (TINYA)**

*Real Technology, Positive Impact and Real Value.*

TINYA is an initiative focused on empowering young Nigerians through agriculture, technology, innovation, entrepreneurship and sustainable development.

This repository contains the source code for the official TINYA website and its membership management portal. The platform is designed to strengthen TINYA's digital presence, provide information about its programmes and initiatives, and enable individuals, students, professionals and institutions to apply for membership online.

---

## Table of Contents

- [About TINYA](#about-tinya)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Membership Categories](#membership-categories)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Membership Application Process](#membership-application-process)
- [Payment Integration](#payment-integration)
- [Security Considerations](#security-considerations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About TINYA

The Initiative for Nigerian Youths in AgroTech (TINYA) is committed to promoting opportunities for young people through the intersection of agriculture, technology and innovation.

The initiative seeks to encourage youth participation in modern agriculture, digital transformation, entrepreneurship, skills development and sustainable community advancement.

TINYA initially focuses its operations in Imo State, Nigeria, with a long-term vision of expanding its programmes and impact across the country.

## Project Overview

The TINYA digital platform consists of two major components:

**1. Official Website**

A public-facing website designed to communicate TINYA's mission, vision, activities, programmes, initiatives and opportunities while strengthening its online visibility and institutional identity.

**2. Membership Portal**

An online membership application system that allows eligible individuals and organisations to submit applications, upload supporting documents and complete the membership registration process.

The platform also incorporates payment processing infrastructure for membership fees.

## Key Features

### Website
- Organisational information and digital presence.
- Mission, vision and institutional identity.
- Programmes, initiatives and activities.
- Public information and engagement sections.
- Responsive interface for desktop, tablet and mobile devices.

### Membership Portal
- Online membership registration.
- Multiple membership categories.
- Multi-step application form.
- Applicant information and profile collection.
- State and Local Government Area selection.
- Organisation and institutional information.
- Skills, experience and areas-of-interest collection.
- Passport photograph upload.
- Supporting document uploads.
- Application reference generation.
- Privacy acknowledgement.

### Payment Infrastructure
- Membership fee management.
- Flutterwave payment gateway integration.
- Payment checkout initiation.
- Transaction verification.
- Payment status management.
- Payment confirmation email notifications.

### Backend Infrastructure
- REST API architecture.
- MySQL database integration.
- Application validation.
- Private document storage.
- Environment-based configuration.
- API health monitoring.
- Centralised error handling.

## Membership Categories

The membership portal currently supports the following categories:

| Category | Description |
|---|---|
| Individual | General individual membership |
| Student & Youth | Membership for students and young people |
| Professional | Membership for professionals |
| Institutional | Membership for organisations and institutions |

**Membership application fee:** ₦2,500 NGN.

Membership requirements and supporting documents may vary depending on the selected category.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Backend | Node.js |
| API Framework | Express.js |
| Database | MySQL |
| Database Driver | mysql2 |
| Request Validation | Zod |
| File Uploads | Multer |
| Payment Gateway | Flutterwave |
| Email Service | Nodemailer |
| Security Middleware | Helmet, CORS and Express Rate Limit |
| Version Control | Git and GitHub |

## Project Structure

```text
TINYA/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   └── portal/
│   │   │       └── MembershipRegistration.jsx
│   │   ├── features/
│   │   │   └── membership/
│   │   ├── data/
│   │   │   └── nigeriaLgas.json
│   │   └── ...
│   ├── .env.local
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── middleware/
│   │   │   └── uploads.js
│   │   ├── routes/
│   │   │   ├── membership.js
│   │   │   └── payments.js
│   │   ├── services/
│   │   │   └── email.js
│   │   ├── app.js
│   │   └── db.js
│   │
│   ├── sql/
│   │   ├── schema.sql
│   │   └── payment-schema.sql
│   │
│   ├── storage/
│   │   └── private-uploads/
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

*The structure above highlights the principal project files; additional frontend and backend files may exist.*

## Getting Started

### Prerequisites

Install the following software before running the project:

- Node.js (LTS version recommended).
- npm.
- MySQL Server.
- Git.
- A code editor such as Visual Studio Code.

### 1. Clone the Repository

```bash
git clone https://github.com/alexispotter27/TINYA.git
```

Navigate into the project directory:

```bash
cd TINYA
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd TINYA/backend
npm install
```

## Environment Configuration

The application uses environment variables to manage configuration and sensitive credentials.

### Frontend Configuration

Create a `.env.local` file inside the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Backend Configuration

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
NODE_ENV=development

FRONTEND_ORIGIN=http://localhost:5173

DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=tinya_membership

UPLOAD_DIR=./storage/private-uploads
MAX_FILE_SIZE_MB=10

MEMBERSHIP_FEE_NGN=2500
PAYMENTS_ENABLED=false

FLW_SECRET_KEY=your_flutterwave_secret_key
FLW_WEBHOOK_SECRET_HASH=your_webhook_secret_hash
PAYMENT_REDIRECT_URL=http://localhost:5173/portal/membership

SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email_username
SMTP_PASS=your_email_password
SMTP_FROM=your_sender_email
```

Replace all placeholder values with the appropriate credentials for your environment.

**Important:** Never commit `.env`, `.env.local`, API keys, database passwords, SMTP credentials or private applicant documents to GitHub.

## Database Setup

The application uses MySQL for storing membership applications and payment records.

### 1. Create the Database

Create the database using the provided SQL schema:

```sql
CREATE DATABASE tinya_membership;
```

### 2. Import the Database Schema

Execute the following files in the appropriate order:

1. `backend/sql/schema.sql`
2. `backend/sql/payment-schema.sql`

The first file establishes the membership application database structure. The second adds payment-related fields and creates the payment records table.

Ensure that the database user configured in the backend environment has the necessary permissions.

## Running the Application

The frontend and backend must run independently during local development.

### Start the Backend

From the backend directory:

```bash
npm run dev
```

The API should be available at:

```text
http://localhost:5000
```

API health check:

```text
http://localhost:5000/api/health
```

### Start the Frontend

From the frontend directory:

```bash
npm run dev
```

The Vite development server will normally be available at:

```text
http://localhost:5173
```

Check each package's `scripts` section if your installed development commands differ.

## Membership Application Process

The membership registration workflow is designed around four stages:

1. **Membership Type:** Applicant selects a suitable membership category.
2. **Your Information:** Applicant provides personal and contact information.
3. **Membership Details:** Applicant supplies relevant educational, professional, institutional or organisational information and supporting documents.
4. **Review & Privacy:** Applicant reviews the information and acknowledges the privacy requirements before submitting.

After submission, the backend validates the application, stores the application information and generates a unique application reference.

## Payment Integration

TINYA's membership portal integrates with Flutterwave to facilitate online membership fee payments.

The payment workflow includes:

1. Membership application submission.
2. Application reference generation.
3. Checkout session initiation.
4. Redirect to Flutterwave checkout.
5. Transaction verification through the backend.
6. Payment status update.
7. Confirmation email notification.

The platform is configured to support a payment-enabled switch through the `PAYMENTS_ENABLED` environment variable.

For development and testing, use Flutterwave test credentials. Live credentials should only be configured after production security checks and payment verification testing have been completed.

## Security Considerations

Security is an important part of the TINYA platform.

The application incorporates or is designed to support:

- Environment-based secret management.
- API security middleware.
- Request validation.
- Rate limiting.
- Controlled cross-origin access.
- Private storage for uploaded membership documents.
- Server-side payment verification.
- Database-backed payment records.
- Secure email configuration.

Before production deployment, additional security testing should cover file signature validation, malware scanning, payment webhook authentication, transaction idempotency, database backups and access control.

## Deployment

The application is structured to support separate frontend and backend deployment.

A production deployment should include:

- A production hosting environment for the React frontend.
- A secure Node.js hosting environment for the Express API.
- A managed or securely configured MySQL database.
- HTTPS and SSL certificate configuration.
- Production environment variables.
- Private file storage and backup policies.
- Flutterwave live payment configuration.
- Monitoring, logging and error reporting.

Production deployment should only proceed after testing the complete membership registration and payment workflows.

## Contributing

Contributions, improvements and technical recommendations are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test your changes locally.
5. Submit a pull request describing the improvements.

Example:

```bash
git checkout -b feature/your-feature-name
```

Commit your changes:

```bash
git add .
git commit -m "Add: describe your changes"
git push origin feature/your-feature-name
```

## License

The licensing terms for this project should be established by TINYA's project owners.

Unless a license is explicitly added to this repository, all rights are reserved. No permission to redistribute, modify or commercially use the source code should be assumed.

---

## Organisation

**The Initiative for Nigerian Youths in AgroTech (TINYA)**

*Real Technology, Positive Impact and Real Value.*

**Location:** Imo State, Nigeria.

**GitHub Repository:** https://github.com/alexispotter27/TINYA

**Project:** Official Website and Membership Portal

---

*Building opportunities for young Nigerians through agriculture, technology and innovation.*
