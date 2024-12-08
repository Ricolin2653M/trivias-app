// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyB8fF4Q-Hb2J6Iux-HzSywq02b44TbTKv4",
  authDomain: "text-push-ef788.firebaseapp.com",
  projectId: "text-push-ef788",
  storageBucket: "text-push-ef788.firebasestorage.app",
  messagingSenderId: "545938878715",
  appId: "1:545938878715:web:13457b1a3efb806d1a405e",
  measurementId: "G-QV67445TSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
