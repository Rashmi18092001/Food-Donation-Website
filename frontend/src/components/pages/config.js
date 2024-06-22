import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCycxK-q67o2zCDsJKkH3l9tYWrf2-n8XM",
  authDomain: "food-donation-website-6789d.firebaseapp.com",
  projectId: "food-donation-website-6789d",
  storageBucket: "food-donation-website-6789d.appspot.com",
  messagingSenderId: "819752881568",
  appId: "1:819752881568:web:eb2cbf3dc9391f56eae8c5",
  measurementId: "G-PJW3H63YG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};