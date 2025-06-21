import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyAd6bq8qxUzCKT3WiyyfoPXCDNRrVgHOFk",
    authDomain: "register-237d6.firebaseapp.com",
    projectId: "register-237d6",
    storageBucket: "register-237d6.firebasestorage.app",
    messagingSenderId: "905234091933",
    appId: "1:905234091933:web:852ddf671f87b55a786974"
=======
    apiKey: "AIzaSyAGZBkqGbwTXmy2AOeDNMNZlGb52rE-0P4",
    authDomain: "otel-app-4b6de.firebaseapp.com",
    projectId: "otel-app-4b6de",
    storageBucket: "otel-app-4b6de.firebasestorage.app",
    messagingSenderId: "120487355274",
    appId: "1:120487355274:web:626d6746d1ec10f8471e73"
>>>>>>> 13e1e72 (Güncellendi)
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);


