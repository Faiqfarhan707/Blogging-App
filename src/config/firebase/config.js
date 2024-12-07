// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQBGDkCoaU27zLlox8aUf8_I5cNTGtDb0",
  authDomain: "blogging-app0.firebaseapp.com",
  projectId: "blogging-app0",
  storageBucket: "blogging-app0.firebasestorage.app",
  messagingSenderId: "917896797040",
  appId: "1:917896797040:web:71aaa4c107e65a716ccdb5",
  measurementId: "G-64GKRPLQ5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app