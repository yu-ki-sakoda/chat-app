import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAO2mJdWe0hkH3-vvqnMDKvBNtWkcpfqHw",
  authDomain: "line-45a67.firebaseapp.com",
  projectId: "line-45a67",
  storageBucket: "line-45a67.appspot.com",
  messagingSenderId: "506949087604",
  appId: "1:506949087604:web:8c022ae089db7099223c21"
});

const auth = firebase.auth();

const db = firebaseApp.firestore();

export {auth, db};
