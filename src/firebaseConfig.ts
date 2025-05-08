import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAd6bq8qxUzCKT3WiyyfoPXCDNRrVgHOFk",
    authDomain: "register-237d6.firebaseapp.com",
    projectId: "register-237d6",
    storageBucket: "register-237d6.firebasestorage.app",
    messagingSenderId: "905234091933",
    appId: "1:905234091933:web:852ddf671f87b55a786974"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);


