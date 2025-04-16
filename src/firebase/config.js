// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC53soONLQkM9DF6w9vwrNsYXyiEmLTfBo",
  authDomain: "react-journal-38888.firebaseapp.com",
  projectId: "react-journal-38888",
  storageBucket: "react-journal-38888.firebasestorage.app",
  messagingSenderId: "530081150832",
  appId: "1:530081150832:web:aa2cc08129125c28de01b5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);