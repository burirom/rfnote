import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appID: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyABTa0zOT0SFw0VZRs55ubz_HKjF46auBo",
  authDomain: "react-9f3ef.firebaseapp.com",
  databaseURL: "https://react-9f3ef.firebaseio.com",
  projectId: "react-9f3ef",
  storageBucket: "react-9f3ef.appspot.com",
  messagingSenderId: "891591287582",
  appId: "1:891591287582:web:05ed986e9be79772175f0f"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const store = firebase.firestore();

const storage = firebase.storage();

export {firebase, store, storage};