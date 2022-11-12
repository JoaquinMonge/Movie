// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyBQcwUDA8FPuFZC05Rd02EL-hqhWl_0hOc",
  authDomain: "netflix-react-84b85.firebaseapp.com",
  projectId: "netflix-react-84b85",
  storageBucket: "netflix-react-84b85.appspot.com",
  messagingSenderId: "337632728334",
  appId: " web:8d3d8946395098fad5335f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//1:16:34
