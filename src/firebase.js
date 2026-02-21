import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU9kh8jN4mLLim1Qi8wHV3uA3SVedaF30",
  authDomain: "h-house-trip.firebaseapp.com",
  projectId: "h-house-trip",
  storageBucket: "h-house-trip.firebasestorage.app",
  messagingSenderId: "755162400433",
  appId: "1:755162400433:web:29cb0a7ecbb203b5e6c490",
  measurementId: "G-5MN4GT2YFW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);