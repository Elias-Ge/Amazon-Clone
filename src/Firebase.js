// import {getAuth} from 'firebase/auth';
// import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCySpyvWmqAXQAymmWAocqsVER_O2oVSsA",
  authDomain: "clone-7bf38.firebaseapp.com",
  projectId: "clone-7bf38",
  storageBucket: "clone-7bf38.appspot.com",
  messagingSenderId: "290230960454",
  appId: "1:290230960454:web:75084451242f5e55af2547",
  measurementId: "G-BFBJP50WX5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);
const auth = firebase.auth();

// Initialize Realtime Database and get a reference to the service
// const db = getDatabase(app);
const db = app.firestore();

export { auth, db };