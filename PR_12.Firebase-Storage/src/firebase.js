import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYLrGoRIzRPREGYcF9fRnKRmQUA-A28Cw",
  authDomain: "fir-databse-fa0a3.firebaseapp.com",
  projectId: "fir-databse-fa0a3",
  storageBucket: "fir-databse-fa0a3.firebasestorage.app",
  messagingSenderId: "737509898764",
  appId: "1:737509898764:web:72f5aa769464de667c8c29",
  measurementId: "G-87ZLZYL8Z3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);