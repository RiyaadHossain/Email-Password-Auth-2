// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-OzuCMfZYRszywDV2_3A9jSrzLo6-m8",
  authDomain: "email-password-auth-2-3b45f.firebaseapp.com",
  projectId: "email-password-auth-2-3b45f",
  storageBucket: "email-password-auth-2-3b45f.appspot.com",
  messagingSenderId: "677250272500",
  appId: "1:677250272500:web:b45a185fd6bfe3a5d8e2a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app