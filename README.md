# 🐾 PawRescue - Animal Rescue and Adoption Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code Coverage](https://codecov.io/gh/yourusername/pawrescue/branch/main/graph/badge.svg)](https://codecov.io/gh/yourusername/pawrescue)

PawRescue is a comprehensive platform connecting animal lovers with rescue organizations, shelters, and pets in need of forever homes. Our mission is to make pet adoption and animal rescue more accessible, transparent, and efficient.

## 🌟 Features

### 🏠 For Pet Adopters
- Browse adoptable pets with detailed profiles
- Advanced search and filtering options
- Save favorite pets and track adoption status
- Direct communication with shelters/rescues
- Adoption application process

### 🏢 For Shelters & Rescues
- Manage pet listings and adoption applications
- Track shelter capacity and resources
- Communicate with potential adopters
- Generate reports and analytics
- Manage staff and volunteers

### 🤝 For General Users
- Report stray or injured animals
- Find local animal services and resources
- Access educational content about pet care
- Support rescue organizations through donations

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or later
- PostgreSQL 12+
- Git
- Yarn or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/pawrescue.git](https://github.com/yourusername/pawrescue.git)
   cd pawrescue

# Install dependencies

npm install

# or

yarn install

# Set up environment variables

cp .env.example .env


# Update the .env file with your configuration

Set up database

# Run database migrations

npm run db:migrate


# Seed initial data (optional)

npm run db:seed

Start the development server


# Start frontend and backend

npm run dev


# Or start them separately

npm run dev:frontend

npm run dev:backend


# Open your browser

http://localhost:3000

# 🏗️ Project Structure

pawrescue/

├── src/

│   ├── api/                          # API routes and controllers

│   ├── components/                   # Reusable UI components

│   ├── config/                       # Configuration files

│   ├── context/                      # React context providers

│   ├── db/                           # Database models and migrations

│   ├── hooks/                        # Custom React hooks

│   ├── layouts/                      # Page layout components

│   ├── pages/                        # Application pages

│   ├── services/                     # API service layer

│   ├── styles/                       # Global styles

│   ├── types/                        # TypeScript type definitions

│   └── utils/                        # Utility functions

├── public/                           # Static files

└── tests/                            # Test files


# 🔧 Configuration

Environment Variables:

Create a .env file in the root directory with the following variables:

.env

# Application
NODE_ENV=development

PORT=3000

API_URL=http://localhost:3001

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/pawrescue

DATABASE_SSL=false

# Authentication
JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d

# Email (for notifications)
SMTP_HOST=smtp.example.com

SMTP_PORT=587

SMTP_USER=your-email@example.com

SMTP_PASS=your-email-password

SMTP_FROM=noreply@pawrescue.com


# Storage (for pet images)
STORAGE_PROVIDER=local # or 's3'

AWS_ACCESS_KEY_ID=your-aws-key

AWS_SECRET_ACCESS_KEY=your-aws-secret

AWS_REGION=us-east-1

AWS_BUCKET_NAME=pawrescue-uploads


# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id

GOOGLE_CLIENT_SECRET=your-google-client-secret


📦 Scripts
-dev - Start development server
-build - Build for production
-start - Start production server
-test - Run tests
-lint - Run linter
-format - Format code with Prettier
-db:migrate - Run database migrations
-db:seed - Seed database with test data


🛠️ Tech Stack

Frontend:

-React 18
-TypeScript
-Vite
-Tailwind CSS
-React Query
-React Hook Form
-React Router
-Framer Motion (animations)
-React Icons

Backend:

-Node.js
-Express
-PostgreSQL
-Drizzle ORM
-JWT Authentication
-Zod (validation)
-DevOps
-GitHub Actions (CI/CD)
-Docker
-AWS S3 (file storage)
-Vercel (deployment)


# 📝 API Documentation

API documentation is available at /api-docs when running the development server.


# 🤝 Contributing

We welcome contributions! Please read our Contributing Guide to get started.


# Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request


# 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


# 🙏 Acknowledgments

Drizzle ORM - For the awesome TypeScript ORM

Tailwind CSS - For the utility-first CSS framework

React Icons - For the beautiful icons


# 📞 Contact

For any questions or feedback, please reach out to:


# Rishabh Shan - rishabhshan7@example.com

# Project Link: https://github.com/RishabhArt/PawRescue-Application
