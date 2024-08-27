// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD59VoB-6c2K_WLhL_dDAsGFBkjPN1NZLs",
  authDomain: "netflixgpt-6e51b.firebaseapp.com",
  projectId: "netflixgpt-6e51b",
  storageBucket: "netflixgpt-6e51b.appspot.com",
  messagingSenderId: "513489414612",
  appId: "1:513489414612:web:a55634e5682b06f22c8e41",
  measurementId: "G-1D4YFBPGB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
