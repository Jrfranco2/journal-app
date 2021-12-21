// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfhStD4uGechCaTSu3q3tQA6B1Hva5KEk",
  authDomain: "journal-app-46cd5.firebaseapp.com",
  projectId: "journal-app-46cd5",
  storageBucket: "journal-app-46cd5.appspot.com",
  messagingSenderId: "521877562593",
  appId: "1:521877562593:web:849aa79bcb6e7566e083a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider, app };
