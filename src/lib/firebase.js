import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkiAWo-8zcZ_Qd8qmnFkp9BYqHEhkLpYE",
  authDomain: "wedding-fira-luqman.firebaseapp.com",
  projectId: "wedding-fira-luqman",
  storageBucket: "wedding-fira-luqman.firebasestorage.app",
  messagingSenderId: "216912717072",
  appId: "1:216912717072:web:aa1bc549361b093c767195"
  // measurementId: "G-JE1ELVN1KS" // Optional, disabled for now
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
