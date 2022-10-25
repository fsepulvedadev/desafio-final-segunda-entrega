// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb_Pfb4G7A5TBZodaf1CKA6d7LzxmqNDA",
  authDomain: "proyectofinal-f22dd.firebaseapp.com",
  projectId: "proyectofinal-f22dd",
  storageBucket: "proyectofinal-f22dd.appspot.com",
  messagingSenderId: "917402391061",
  appId: "1:917402391061:web:44600ba62aa19deb75741c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
