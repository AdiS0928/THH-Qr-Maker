// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF4a33qdFOQZQWo867jRdhIjmEDTeoNpc",
  authDomain: "thhregistration.firebaseapp.com",
  projectId: "thhregistration",
  storageBucket: "thhregistration.appspot.com",
  messagingSenderId: "982972605584",
  appId: "1:982972605584:web:48726cfb583207d807a415",
  measurementId: "G-XZEK3G4577"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase; 