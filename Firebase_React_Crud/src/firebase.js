import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI3TJtbe0PagdWlORRb1sF5K9wGQTSJF0",
  authDomain: "crud-b4f76.firebaseapp.com",
  databaseURL: "https://crud-b4f76-default-rtdb.firebaseio.com",
  projectId: "crud-b4f76",
  storageBucket: "crud-b4f76.firebasestorage.app",
  messagingSenderId: "125947262915",
  appId: "1:125947262915:web:e31b1348c8f25d8bb8ef76",
  measurementId: "G-Y2B8ES3TQ7"
};

export const app = initializeApp(firebaseConfig);