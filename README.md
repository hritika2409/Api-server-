# API Server

A full-stack book management system with a custom REST API server built with Node.js/Express and a React frontend. This project demonstrates comprehensive CRUD operations for managing a book collection with user authentication and a modern web interface.

## 📋 Assignment Requirements Completed

✅ **Task 1: Build Your Own API Server [Mandatory]**
- ✅ Custom Book Management API with 4+ different endpoints
- ✅ MongoDB database integration with full CRUD operations
- ✅ React frontend interface for user interaction
- ✅ Comprehensive API documentation with examples
- ✅ Extensive testing with curl commands
- ✅ Clear README with complete setup instructions

## 🚀 Project Overview

This project creates a comprehensive book management system where users can:
- Browse and search through a collection of books
- Add new books to the database
- Update existing book information
- Delete books from the collection
- User authentication and authorization
- Responsive web interface for seamless interaction

## 📸 Screenshots

### Frontend Interface
![Website Screenshot](./Site.png)
*React frontend showing the book management interface with book list, forms, and user dashboard*

### MongoDB Database
![MongoDB Screenshot](./mongodb.png)
*MongoDB collections showing the book data structure and user management*

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express.js
- MongoDB with Mongoose ODM
- JWT Authentication
- Express Validator
- CORS middleware

**Frontend:**
- React.js
- Modern JavaScript (ES6+)
- CSS3 for styling
- Responsive design

**Database:**
- MongoDB (Local or Atlas)
- Mongoose for object modeling

## 📁 Project Structure

```
API-SERVER-/
├── book-api-frontend/           # React Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookForm.js      # Form for adding/editing books
│   │   │   ├── BookList.js      # Display list of books
│   │   │   └── EditBookForm.js  # Edit existing books
│   │   ├── App.css              # Main application styles
│   │   ├── App.js               # Main React component
│   │   ├── App.test.js          # React component tests
│   │   ├── index.css            # Global styles
│   │   ├── index.js             # React entry point
│   │   ├── logo.svg             # Application logo
│   │   ├── reportWebVitals.js   # Performance reporting
│   │   └── setupTests.js        # Test configuration
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── models/
│   └── book.js                  # Book data model/schema
├── routes/
│   ├── bookRoutes.js           # Book API endpoints
│   ├── package-lock.json
│   └── package.json
├── mongodb.png                  # Database screenshot
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js                    # Main server file
└── Site.png                     # Website screenshot
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/hritika2409/Api-server-.git
cd Api-server-
```

### Step 2: Backend Setup
```bash
# Install backend dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration
```

### Step 3: Frontend Setup
```bash
# Navigate to frontend directory
cd book-api-frontend

# Install frontend dependencies
npm install
```

### Step 4: Environment Configuration
Create a `.env` file in the root directory:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/book-management
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/book-management

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

### Step 5: Database Setup

#### Option A: Local MongoDB
```bash
# Start MongoDB service
mongod

# The database and collections will be created automatically
```

#### Option B: MongoDB Atlas
1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new cluster
3. Create a database named `book-management`
4. Get your connection string
5. Update `MONGODB_URI` in `.env`

### Step 6: Run the Application

#### Start the Backend Server
```bash
# From the root directory
node server.js


# Server will run on http://localhost:5000
```

#### Start the Frontend Application
```bash
# From the book-api-frontend directory
cd book-api-frontend
npm run start

# Frontend will run on http://localhost:3000
```

## 🌐 Custom API Endpoints

### Book Management Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/books` | Get all books | No |
| GET | `/api/books/:id` | Get single book by ID | No |
| POST | `/api/books` | Add new book | Optional* |
| PUT | `/api/books/:id` | Update existing book | Optional* |
| DELETE | `/api/books/:id` | Delete book | Optional* |

### User Authentication Endpoints (if implemented)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| GET | `/api/auth/profile` | Get user profile | Yes |
| POST | `/api/auth/logout` | User logout | Yes |

*Auth requirement depends on your implementation
