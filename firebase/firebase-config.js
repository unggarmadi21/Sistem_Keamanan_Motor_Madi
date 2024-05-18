// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNETrWpkQ28KZPldHxUobP1PqLXI4Wct4",
    authDomain: "sistemkeamananmotor-615ed.firebaseapp.com",
    databaseURL: "https://sistemkeamananmotor-615ed-default-rtdb.firebaseio.com",
    projectId: "sistemkeamananmotor-615ed",
    storageBucket: "sistemkeamananmotor-615ed.appspot.com",
    messagingSenderId: "171530266318",
    appId: "1:171530266318:web:825f32c9a651224dffd29f",
    measurementId: "G-L1KZX0939W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getDatabase(app);