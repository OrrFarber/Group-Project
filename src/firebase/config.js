import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fire-base-f7c53.firebaseapp.com",
  databaseURL: "https://fire-base-f7c53-default-rtdb.firebaseio.com",
  projectId: "fire-base-f7c53",
  storageBucket: "fire-base-f7c53.appspot.com",
  messagingSenderId: "21182107059",
  appId: "1:21182107059:web:9fbe775221b4863f0e4fc6",
  measurementId: "G-87Q2WEBF8W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);