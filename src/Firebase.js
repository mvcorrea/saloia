import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBTZaWEaK-sINhihygYyFQZwzV4piox78g",
    authDomain: "saloia.firebaseapp.com",
    databaseURL: "https://saloia.firebaseio.com",
    projectId: "saloia",
    storageBucket: "",
    messagingSenderId: "40628852017",
    appId: "1:40628852017:web:7f24796273d05ad49d8c10",
    measurementId: "G-F52B851FCG"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

export default firebase;

