# DeepFlix

# Done

- Header
- Routing of App
- Login Form
- Sign up Form
- Form validaton
- useRef Hook 
- Firebase Setup
- Deploying our App to production 
- Create SignUp User Account


# Setuping React Project with parcel
- Create React using parcel from scratch
App.js
index.html
index.css

npm init (package.json)
npm install -D parcel (packagelock.json, node_modules)
npm install react react-dom

remove main: index.js from package.json

- run
npx parcel index.html (.parcel-cache, dist)

- Add...
script {
    start: parcel index.html
}

- run
npm start

# Config Tailwindcss

- run 
npm install tailwindcss @tailwindcss/postcss

- add
.postcssrc
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}

- add
index.css
@import "tailwindcss";

# Features:

- React App
- Configured Tailwind
- Header
- Login form
 
- Login/sign-up
    - Sign In/ Sign-Up Form
    - redirect to browser Page

- Browser (after authentication)
 - Header
 - Main Movie
    - Trailer in Background
    - Title & description
- Movie Suggestions
    -MovieList

- NetFlixGPT
    - Search Bar
    - Movie Suggestions


# Firebase (Auth)

- sudo npm install -g firebase
- sudo npm intall -g firebase-tools
- firebase login

# Setuping redux store

- To store the login user data.
    - npm i -D @reduxjs/toolkit
    - npm i react-redux

# Using The Movie Database (TMDB) Api for App Data

- create a App
- get access token from it..
- Get data from TMDB now playing movie list API
