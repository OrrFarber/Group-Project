// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD10a-OQdUjBKJm6ZoBCm_c_kJQs0-kVw0",
  authDomain: "group-project-3ff5e.firebaseapp.com",
  projectId: "group-project-3ff5e",
  storageBucket: "group-project-3ff5e.appspot.com",
  messagingSenderId: "334177744603",
  appId: "1:334177744603:web:2aceb21e9b8f35c4dc7efe",
  measurementId: "G-6NCPCY4VDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);