// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhm8kxcVHu0sSFQsqKKQMo1ncY2imsNXE",
  authDomain: "clone-e342a.firebaseapp.com",
  projectId: "clone-e342a",
  storageBucket: "clone-e342a.appspot.com",
  messagingSenderId: "423038317633",
  appId: "1:423038317633:web:6e4b9ede821861692602c0",
  measurementId: "G-H4JYRGMYJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
