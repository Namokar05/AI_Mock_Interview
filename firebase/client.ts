// Import the functions you need from the SDKs you need

import { initializeApp,getApp,getApps } from "firebase/app";
import{getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDC9JgZxJE81MoYZXjUhP5x3SeczpL2VE",
    authDomain: "mockerz.firebaseapp.com",
    projectId: "mockerz",
    storageBucket: "mockerz.firebasestorage.app",
    messagingSenderId: "948003965151",
    appId: "1:948003965151:web:833d06d2f45c8685ef416a",
    measurementId: "G-LCZDGJLCJ1"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp()
export const auth=getAuth(app);
export const db=getFirestore(app);