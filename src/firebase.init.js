// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5B9gclSE9JpEcpbB2LcKsTJzvF5os2qw",
  authDomain: "simple-firebase-auth-01.firebaseapp.com",
  projectId: "simple-firebase-auth-01",
  storageBucket: "simple-firebase-auth-01.appspot.com",
  messagingSenderId: "2027695034",
  appId: "1:2027695034:web:ca00d9cbe1f9c7bdba4b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;