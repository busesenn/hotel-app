import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGZBkqGbwTXmy2AOeDNMNZlGb52rE-0P4",
    authDomain: "otel-app-4b6de.firebaseapp.com",
    projectId: "otel-app-4b6de",
    storageBucket: "otel-app-4b6de.firebasestorage.app",
    messagingSenderId: "120487355274",
    appId: "1:120487355274:web:626d6746d1ec10f8471e73"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);


