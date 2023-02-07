// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAfuA2JL327nRrBm4x5DQOoj7Ajba9rnk",
  authDomain: "fir-app-tuto-27159.firebaseapp.com",
  projectId: "fir-app-tuto-27159",
  storageBucket: "fir-app-tuto-27159.appspot.com",
  messagingSenderId: "307326261091",
  appId: "1:307326261091:web:4479f12249a94f75eee556"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)