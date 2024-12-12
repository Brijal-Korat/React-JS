import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA45gbjcbL2UeEIuDnZxuI0x1kg_-dqhkc",
  authDomain: "exam-firebase-d310b.firebaseapp.com",
  databaseURL: "https://exam-firebase-d310b-default-rtdb.firebaseio.com",
  projectId: "exam-firebase-d310b",
  storageBucket: "exam-firebase-d310b.firebasestorage.app",
  messagingSenderId: "1096932147404",
  appId: "1:1096932147404:web:cd92619602a78a23ff4269",
  measurementId: "G-0KJF1H7SMB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);