// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkL8xDt7qZGvyHR_uYxmo_Ky9hq8WKIgw",
  authDomain: "travelplanner-e34ed.firebaseapp.com",
  projectId: "travelplanner-e34ed",
  storageBucket: "travelplanner-e34ed.firebasestorage.app",
  messagingSenderId: "125042918990",
  appId: "1:125042918990:web:7383ccd173d7b2b307651f",
  measurementId: "G-BTGXN1VKF8"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
