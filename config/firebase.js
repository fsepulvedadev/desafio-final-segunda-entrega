// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrbSayTstQS2DzdtAb2BFlkxb6iuh08OE",
  authDomain: "segundaentrega-67dbf.firebaseapp.com",
  projectId: "segundaentrega-67dbf",
  storageBucket: "segundaentrega-67dbf.appspot.com",
  messagingSenderId: "376167533461",
  appId: "1:376167533461:web:0bdcbc68a534d42ab5c49c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
