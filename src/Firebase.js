// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxRw8DAoeAzEhZNm2ft41nGrYvJgE_WFM",
  authDomain: "shoppingapp-fb6b1.firebaseapp.com",
  projectId: "shoppingapp-fb6b1",
  storageBucket: "shoppingapp-fb6b1.appspot.com",
  messagingSenderId: "445591605343",
  appId: "1:445591605343:web:245e290354971c0319cbea",
  measurementId: "G-48Y588KB3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};