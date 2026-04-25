# MyBlogs Capstone Project (MERN)

## Project Overview

MyBlogs is a full-stack blogging platform built using the MERN stack. It allows users to create, edit, delete, and explore blog posts. The application includes authentication, a personalized dashboard, search functionality, and a clean modern user interface.

---

## Features

* User Registration and Login using JWT Authentication
* Create, Edit, and Delete Blog Posts
* Dashboard to manage user posts
* Search functionality for blogs
* Profile management with additional user details
* Reset password feature
* Responsive and modern UI design
* Scroll-based navigation and smooth user experience

---

## Tech Stack

### Frontend

* React.js
* CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt for password hashing

---

## Project Structure

```
Capstone-Project/
│
├── client/        # React frontend
├── server/        # Node.js backend
├── .gitignore
├── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```
git clone https://github.com/YOUR-USERNAME/MyBlogs_Capstone-Project_MERN.git
```

### 2. Install Dependencies

#### Frontend

```
cd client
npm install
```

#### Backend

```
cd server
npm install
```

---

### 3. Environment Variables

Create a `.env` file inside the server folder and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run the Application

#### Start Backend

```
cd server
npm run dev
```

#### Start Frontend

```
cd client
npm start
```

---

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login
* POST /api/auth/reset-password
* DELETE /api/auth/delete-account

### Posts

* GET /api/posts
* POST /api/posts
* PUT /api/posts/:id
* DELETE /api/posts/:id

---

## Key Functionalities

### Authentication

Secure user authentication using JWT tokens. Passwords are hashed using bcrypt for security.

### Blog Management

Users can create, update, delete, and view blog posts through a clean interface.

### Search Feature

Users can search blog posts by keywords, improving content discoverability.

### Profile Management

Users can view personal information and delete their account.

---

## Deployment

Frontend can be deployed using Vercel.
Backend can be deployed using Render.
MongoDB Atlas is used as the cloud database.

