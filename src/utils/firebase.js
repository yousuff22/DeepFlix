// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEtkaeEJ9E1NynK_7eTdNU7bm99zlPMwY",
  authDomain: "netflixgpt-21746.firebaseapp.com",
  projectId: "netflixgpt-21746",
  storageBucket: "netflixgpt-21746.firebasestorage.app",
  messagingSenderId: "222705300095",
  appId: "1:222705300095:web:5571da7c3f95e5f784854a",
  measurementId: "G-QQQ1RL8D65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();