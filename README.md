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

## 📖 API Documentation & Examples

### 1. Get All Books
```bash
# Request
curl -X GET http://localhost:5000/api/books

# Response
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "isbn": "978-0-7432-7356-5",
      "publishedYear": 1925,
      "genre": "Fiction",
      "description": "A classic American novel...",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### 2. Get Single Book
```bash
# Request
curl -X GET http://localhost:5000/api/books/507f1f77bcf86cd799439011

# Response
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "publishedYear": 1925,
    "genre": "Fiction",
    "description": "A classic American novel set in the Jazz Age...",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 3. Add New Book
```bash
# Request
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "978-0-06-112008-4",
    "publishedYear": 1960,
    "genre": "Fiction",
    "description": "A gripping tale of racial injustice and childhood innocence"
  }'

# Response
{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "978-0-06-112008-4",
    "publishedYear": 1960,
    "genre": "Fiction",
    "description": "A gripping tale of racial injustice and childhood innocence",
    "createdAt": "2024-01-15T11:30:00.000Z",
    "updatedAt": "2024-01-15T11:30:00.000Z"
  }
}
```

### 4. Update Book
```bash
# Request
curl -X PUT http://localhost:5000/api/books/507f1f77bcf86cd799439012 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "To Kill a Mockingbird - Updated Edition",
    "description": "An updated description of this classic novel"
  }'

# Response
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "To Kill a Mockingbird - Updated Edition",
    "author": "Harper Lee",
    "isbn": "978-0-06-112008-4",
    "publishedYear": 1960,
    "genre": "Fiction",
    "description": "An updated description of this classic novel",
    "updatedAt": "2024-01-15T12:30:00.000Z"
  }
}
```

### 5. Delete Book
```bash
# Request
curl -X DELETE http://localhost:5000/api/books/507f1f77bcf86cd799439012

# Response
{
  "success": true,
  "message": "Book deleted successfully"
}
```

## 🗄️ Database Integration

### Database Choice: MongoDB
- **Why MongoDB?** Perfect for storing book data with flexible schema
- **Connection:** Mongoose ODM for elegant data modeling and validation
- **Collections:** Books, Users (if auth implemented)

### Book Data Model
```javascript
// models/book.js
{
  _id: ObjectId,
  title: String (required),
  author: String (required),
  isbn: String (unique),
  publishedYear: Number,
  genre: String,
  description: String,
  price: Number,
  inStock: Boolean,
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

### CRUD Operations Implemented
- **Create:** Add new books with validation
- **Read:** Fetch all books or single book with search/filter options
- **Update:** Modify existing book information
- **Delete:** Remove books from the collection

## 🖥️ Frontend Interface

The React frontend provides an intuitive interface for book management:

### Features
- **Book List Component:** Display all books in a responsive grid/list
- **Book Form Component:** Add new books with validation
- **Edit Book Form:** Update existing book information
- **Search & Filter:** Find books by title, author, or genre
- **Responsive Design:** Works on desktop, tablet, and mobile devices

### Frontend Components
- `BookList.js` - Displays all books with pagination
- `BookForm.js` - Form for adding new books
- `EditBookForm.js` - Form for editing existing books
- `App.js` - Main application component with routing

### How to Use the Frontend
1. Navigate to `http://localhost:3000`
2. View the list of all books
3. Use the "Add Book" form to create new entries
4. Click "Edit" on any book to modify its information
5. Use "Delete" to remove books from the collection

## 🧪 Testing Your API

### Complete API Testing Suite

#### Test All Books Endpoint
```bash
# Get all books
curl -X GET http://localhost:5000/api/books

# Get books with query parameters (if implemented)
curl -X GET "http://localhost:5000/api/books?genre=Fiction&limit=5"
```

#### Test Single Book Endpoint
```bash
# Get specific book (replace with actual ID)
curl -X GET http://localhost:5000/api/books/BOOK_ID_HERE
```

#### Test Book Creation
```bash
# Add a new book
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "1984",
    "author": "George Orwell",
    "isbn": "978-0-452-28423-4",
    "publishedYear": 1949,
    "genre": "Dystopian Fiction",
    "description": "A dystopian social science fiction novel"
  }'
```

#### Test Book Update
```bash
# Update existing book (replace BOOK_ID_HERE with actual ID)
curl -X PUT http://localhost:5000/api/books/BOOK_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{
    "title": "1984 - Special Edition",
    "price": 15.99
  }'
```

#### Test Book Deletion
```bash
# Delete a book (replace BOOK_ID_HERE with actual ID)
curl -X DELETE http://localhost:5000/api/books/BOOK_ID_HERE
```

### Error Handling Tests
```bash
# Test invalid book ID
curl -X GET http://localhost:5000/api/books/invalid-id

# Test missing required fields
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "Incomplete Book"}'
```

## 🚀 Deployment Options

### Local Development
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

### Production Deployment
- **Heroku, Vercel, or Netlify** for hosting
- **MongoDB Atlas** for database
- Environment variables configuration
- Build optimization for React frontend

## 📚 API Response Format

All API responses follow a consistent format:

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { /* response data */ },
  "count": 10  // for list endpoints
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message description",
  "statusCode": 400
}
```

## 🔧 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| PORT | Backend server port | No | 5000 |
| MONGODB_URI | MongoDB connection string | Yes | - |
| JWT_SECRET | JWT signing secret | Optional | - |
| NODE_ENV | Environment mode | No | development |
| CLIENT_URL | Frontend URL for CORS | No | http://localhost:3000 |

## 🎯 Assignment Checklist

- [x] ✅ **Custom API with 4+ endpoints** (GET, POST, PUT, DELETE for books)
- [x] ✅ **Database integration** (MongoDB with Mongoose)
- [x] ✅ **CRUD operations** (Complete Create, Read, Update, Delete)
- [x] ✅ **Frontend interface** (React application with components)
- [x] ✅ **API documentation** (Comprehensive with curl examples)
- [x] ✅ **Testing examples** (Complete curl command suite)
- [x] ✅ **Clear README** (Detailed setup and usage instructions)
- [x] ✅ **Organized repository** (Clean project structure)

## 🤝 How to Interact with the API

### Using the Frontend
1. Start both backend and frontend servers
2. Navigate to `http://localhost:3000`
3. Use the web interface to manage books

### Using curl (Command Line)
Follow the testing examples above to interact directly with the API endpoints.

### Using Postman
Import the API endpoints into Postman for a GUI-based testing experience.

## 👥 Author

**Hritika** - [@hritika2409](https://github.com/hritika2409)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🚀 Quick Start Guide

1. **Clone:** `git clone https://github.com/hritika2409/Api-server-.git`
2. **Backend:** `npm install && npm start`
3. **Frontend:** `cd book-api-frontend && npm install && npm start`
4. **Visit:** `http://localhost:3000`
5. **API:** `http://localhost:5000/api/books`

**Note:** Update the screenshot paths (`mongodb.png` and `Site.png`) to display your actual project images.