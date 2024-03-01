// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-26b96.firebaseapp.com",
  projectId: "mern-blog-26b96",
  storageBucket: "mern-blog-26b96.appspot.com",
  messagingSenderId: "417299526437",
  appId: "1:417299526437:web:77b7c7731106536e47a0cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);