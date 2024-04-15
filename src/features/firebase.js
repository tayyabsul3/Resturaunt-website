// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKdXctXe9rO8fo29QpyzJP7h4Qbum1jm0",
  authDomain: "react-authentication-397c3.firebaseapp.com",
  projectId: "react-authentication-397c3",
  storageBucket: "react-authentication-397c3.appspot.com",
  messagingSenderId: "120376329514",
  appId: "1:120376329514:web:886c3b52b7198633494a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new  GoogleAuthProvider(app);
