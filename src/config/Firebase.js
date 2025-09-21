// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-learning-464aa.firebaseapp.com",
  projectId: "fir-learning-464aa",
  storageBucket: "fir-learning-464aa.firebasestorage.app",
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSENGER_SENDER_ID,
  appId:import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-CDXBHRH1TW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app)
export const db=getFirestore(app)
export const Googleprovider=new GoogleAuthProvider();