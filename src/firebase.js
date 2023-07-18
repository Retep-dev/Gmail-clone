import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsyq2Mz5dkonJgmv8Cn-v98fSVZNaJNeo",
  authDomain: "clone-retep.firebaseapp.com",
  projectId: "clone-retep",
  storageBucket: "clone-retep.appspot.com",
  messagingSenderId: "813374372110",
  appId: "1:813374372110:web:29f8a3943d4e7aa6aebf5f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
 