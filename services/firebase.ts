// services/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADJCwsWp8AalCLuCZ8E4__704_MceamMM",
  authDomain: "miviejogarage-fc52e.firebaseapp.com",
  projectId: "miviejogarage-fc52e",
  storageBucket: "miviejogarage-fc52e.firebasestorage.app",
  messagingSenderId: "23424660571",
  appId: "1:23424660571:web:a11da1e7d08bbb61a57b7e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);