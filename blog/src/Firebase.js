// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "blog-55955.firebaseapp.com",
  projectId: "blog-55955",
  storageBucket: "blog-55955.appspot.com",
  messagingSenderId: "589991881893",
  appId: "1:589991881893:web:c8a5f35d6b3942197c314c"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);