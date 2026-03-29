> A secure, Aadhar-based backend API for digital elections and voting management.

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
![Stars](https://img.shields.io/github/stars/vaibhavidhenge23/voting-application?style=social)
![Issues](https://img.shields.io/github/issues/vaibhavidhenge23/voting-application)
![Pull Requests](https://img.shields.io/github/issues-pr/vaibhavidhenge23/voting-application)
![Last Commit](https://img.shields.io/github/last-commit/vaibhavidhenge23/voting-application)
![Repo Size](https://img.shields.io/github/repo-size/vaibhavidhenge23/voting-application)

## 📖 Overview

The **Voting Application API** provides a backend foundation for securely managing digital elections. To prevent fraudulent voting, the system uses the 12-digit Indian Aadhar Card Number as a unique identifier for voter registration and authentication. 

The application utilizes Role-Based Access Control (RBAC) to differentiate between `voters` and `admins`. Administrators have the exclusive ability to manage candidate profiles, while voters are restricted to viewing candidates and casting a single, immutable vote.

## ✨ Features

- **🔒 Secure Authentication:** JWT-based stateless authentication with Bcrypt password hashing.
- **🆔 Aadhar Validation:** Enforces strict 12-digit Aadhar number validation for registration to ensure unique voter identities.
- **👮 Role-Based Access:** Distinguishes between standard voters and administrators. Only one admin account can exist.
- **✋ One-Vote Policy:** System-level checks ensure a user can only cast a single vote. Admins are restricted from voting.
- **📊 Live Vote Tracking:** Endpoints to securely fetch the current vote count sorted by leading candidates.
- **👥 Candidate Management:** Full CRUD capabilities for admins to manage election candidates.

## 🛠 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Runtime** | [Node.js](https://nodejs.org/) | JavaScript runtime environment. |
| **Framework** | [Express.js](https://expressjs.com/) | Fast, unopinionated web framework for APIs. |
| **Database** | [MongoDB](https://www.mongodb.com/) | NoSQL database for flexible data storage. |
| **ODM** | [Mongoose](https://mongoosejs.com/) | Elegant MongoDB object modeling. |
| **Security** | [JSON Web Tokens (JWT)](https://jwt.io/) | Secure data transmission and session management. |
| **Encryption**| [Bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing algorithm. |

## 🏗 Architecture

The system follows a standard RESTful API architecture with a middleware-first approach to route protection.

```mermaid
flowchart TD
    Client([Client App / Postman]) -->|HTTP Requests| API[Express API Router]
    
    API -->|Auth Routes| UserCtrl[User Controller]
    API -->|Protected Routes| JWTMid{JWT Middleware}
    
    JWTMid -- Invalid Token --> 401[401 Unauthorized]
    JWTMid -- Valid Token --> RoleCheck{Admin Check}
    
    RoleCheck -- Admin --> CandCtrl[Candidate Controller]
    RoleCheck -- Voter --> VoteCtrl[Voting Controller]
    
    UserCtrl --> DB[(MongoDB)]
    CandCtrl --> DB
    VoteCtrl --> DB
📁 Project StructurePlaintext├── models/
│   ├── candidate.js       # Mongoose schema for Candidates (votes, party)
│   └── user.js            # Mongoose schema for Users (Aadhar, role, password)
├── routes/
│   ├── candidateRoutes.js # Endpoints for candidate management & voting
│   └── userRoutes.js      # Endpoints for auth & user profiles
├── db.js                  # Database connection configuration
├── jwt.js                 # JWT generation and verification middleware
├── server.js              # Application entry point & server setup
├── package.json           # Dependencies and scripts
└── .env                   # Environment variables (Ignored in Git)
🚀 Installation1. Clone the repositoryBashgit clone [https://github.com/vaibhavidhenge23/voting-application.git](https://github.com/vaibhavidhenge23/voting-application.git)
cd voting-application
2. Install dependenciesBashnpm install
3. Configure Environment VariablesCreate a .env file in the root directory and add the following configuration:Code snippetPORT=3000
MONGODB_URL_LOCAL=mongodb://localhost:27017/voting_db
JWT_SECRET=your_super_secret_jwt_key
4. Start the ServerBash# Start normally
npm start
📄 LicenseDistributed under the ISC License. See package.json for more information.
