# 🎬 DeepFlix

DeepFlix is a Netflix-inspired web application built using **React**, **Firebase**, **Redux Toolkit**, and **TMDB API**. It features a clean UI with Tailwind CSS and is powered by Parcel bundler for fast development and deployment.

---

## ✅ Features Implemented

- ✅ Header Component
- ✅ Routing with React Router
- ✅ Login & Sign-Up Forms
- ✅ Form Validation using `useRef`
- ✅ Firebase Authentication
- ✅ Redux Store Integration
- ✅ TMDB Movie Data Integration
- ✅ Tailwind CSS Configuration
- ✅ Movie Browser UI (Title, Trailer, Suggestions)
- ✅ NetFlixGPT (Search Functionality with Suggestions)
- ✅ Production Deployment

---

## 🚀 Project Setup (React + Parcel)

1. **Initialize Project**
   ```bash
   npm init -y
   npm install -D parcel
   npm install react react-dom

# Project Structure

/index.html
/App.js
/index.css
Package.json

Add script:

"scripts": {
  "start": "parcel index.html"
}
Start App
npm start


# 💨 Tailwind CSS Setup

Install Tailwind
npm install tailwindcss @tailwindcss/postcss
Create .postcssrc
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
Import Tailwind in index.css

@import "tailwindcss";

# 🔐 Firebase Authentication

Install Firebase CLI
sudo npm install -g firebase-tools
Login
firebase login
Firebase Integration
Create Firebase project
Enable Email/Password Authentication
Add Firebase config to your app

# 🧠 Redux Store Setup

To manage user login state:
npm install @reduxjs/toolkit react-redux

# 🎥 TMDB API Integration

Visit: https://www.themoviedb.org/

Create an account and an application.

Get your access token (v4).

Use TMDB endpoints like:

/movie/now_playing

/search/movie

# 🌐 Deployment
Deploy your app using Firebase Hosting:

firebase init
firebase deploy

# 📁 Folder Structure (Example)

/src
 ├── components
 ├── hooks
 ├── pages
 ├── redux
 ├── utils
 ├── App.js
 └── index.js


# 🧪 Future Improvements
Add loader UI

Add pagination to movie list

User profile page

Add trailers with full controls

# 📌 Author
Yousuf Sayyed
GitHub | LinkedIn

# 📃 License
This project is open-source and available under the MIT License.









