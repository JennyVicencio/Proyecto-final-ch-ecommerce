// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvO7S05EfkR8Yr_3GPuWdAFxhzRnFEwlQ",
  authDomain: "proyecto-ch-ecommerce-jv.firebaseapp.com",
  projectId: "proyecto-ch-ecommerce-jv",
  storageBucket: "proyecto-ch-ecommerce-jv.appspot.com",
  messagingSenderId: "743596938079",
  appId: "1:743596938079:web:6b628375fa5428839c9cea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)