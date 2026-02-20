# 📝 Blog App — FastAPI + React (Vite)

A full-stack blog app with Create, Read, Update, Delete posts.

---

## 📁 Project Structure

```
blog-app/
├── backend/
│   ├── main.py          ← FastAPI app + all routes
│   ├── database.py      ← SQLite DB setup
│   ├── models.py        ← SQLAlchemy models
│   ├── schemas.py       ← Pydantic schemas
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── api.js           ← Axios API calls
        ├── components/
        │   ├── Navbar.jsx
        │   ├── PostCard.jsx
        │   └── PostForm.jsx
        └── pages/
            ├── Home.jsx
            ├── CreatePost.jsx
            └── PostDetail.jsx
```

---

## 🚀 How to Run

### Step 1 — Start the Backend

Open a terminal and run:

```bash
cd blog-app/backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at: http://localhost:8000  
API docs at: http://localhost:8000/docs

---

### Step 2 — Start the Frontend

Open a **NEW terminal tab/window** and run:

```bash
cd blog-app/frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

---

## ✅ Features

- View all blog posts on the home page
- Click a post to read the full content
- Create new posts with title, author, category, and content
- Edit existing posts
- Delete posts
- Auto-generates excerpts if you don't write one
- 6 categories: General, Technology, Lifestyle, Travel, Food, Health
- SQLite database (no setup needed — auto-created on first run)

---

## 🔗 API Endpoints

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | /posts         | Get all posts     |
| GET    | /posts/{id}    | Get single post   |
| POST   | /posts         | Create post       |
| PUT    | /posts/{id}    | Update post       |
| DELETE | /posts/{id}    | Delete post       |
