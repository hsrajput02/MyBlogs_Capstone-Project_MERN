# MyBlogs Capstone Project (MERN)

## Project Overview

MyBlogs is a full-stack blogging platform built using the MERN stack. It allows users to register, log in, create, edit, delete, and explore blog posts. The platform focuses on clean UI, responsive design, and smooth user experience.

---

## Live Website

https://myblogs-plateform.vercel.app/

---

## Features

* User Authentication (Register, Login, Logout)
* Create, Edit, Delete Blog Posts
* Search Blogs Functionality
* Dashboard for Managing Posts
* Responsive Design (Mobile + Desktop)
* Profile Dropdown with Navigation
* Modern Hero Section with Background Image
* Interactive UI with Icons and Animations

---

## Tech Stack

Frontend:
* React.js
* CSS3
* React Router
* Axios
* React Icons

Backend:
* Node.js
* Express.js

Database:
* MongoDB Atlas

Deployment:
* Frontend: Vercel
* Backend: Render

---

## Folder Structure

```
MyBlogs_Capstone-Project_MERN/
│
├── client/         # React Frontend
│   ├── src/
│   ├── public/
│
├── server/         # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│
├── README.md
└── .gitignore
```

---

## Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/your-username/MyBlogs_Capstone-Project_MERN.git
cd MyBlogs_Capstone-Project_MERN
```

### 2. Setup Backend

```
cd server
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```
npm start
```

---

### 3. Setup Frontend

```
cd client
npm install
npm start
```

---

## Screenshots

### Home Page
## Landing Page
<img width="1893" height="959" alt="image" src="https://github.com/user-attachments/assets/33bfdcb5-26f5-4775-9d47-21834c7e9853" />

## All Blogs
<img width="1903" height="962" alt="image" src="https://github.com/user-attachments/assets/20b91122-32fd-4108-8ce7-805e318f6fc0" />



### Dashboard

<img width="1911" height="952" alt="image" src="https://github.com/user-attachments/assets/41ef2f18-09a4-45cf-8cb7-edb4a6772629" />


### Create Post

<img width="1909" height="972" alt="image" src="https://github.com/user-attachments/assets/85e9a71c-0174-4070-b3c6-372ecd712e0f" />

---

## API Endpoints

### Auth Routes

* POST /api/auth/register
* POST /api/auth/login
* PUT /api/auth/reset-password

### Post Routes

* GET /api/posts
* POST /api/posts
* PUT /api/posts/
* DELETE /api/posts/

---

## Future Improvements

* Like and Comment System
* Image Upload in Blogs
* Dark Mode
* Bookmark Feature
* User Profile Editing

---

##  Author

**Harpal Singh Lodhi**

* GitHub: https://github.com/hsrajput02
* LinkedIn: https://linkedin.com/in/harpal-singh-b82308304

---
