import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyH5K9WWIct0dJe1dIKWFiYrgUsjmqJ-A",
  authDomain: "chat-298e2.firebaseapp.com",
  projectId: "chat-298e2",
  storageBucket: "chat-298e2.appspot.com",
  messagingSenderId: "127445702070",
  appId: "1:127445702070:web:07692bc2c49faab5d05d17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
