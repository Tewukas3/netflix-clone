import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/**
 * Configuration for the firebase application
 */
const config = {
  apiKey: "AIzaSyDgKJ2g5XlrXqPC7CmX7tmjZ5-rnSE0lkA",
  authDomain: "netflix-backend-ec34b.firebaseapp.com",
  databaseURL: "https://netflix-backend-ec34b.firebaseio.com",
  projectId: "netflix-backend-ec34b",
  storageBucket: "netflix-backend-ec34b.appspot.com",
  messagingSenderId: "736629143355",
  appId: "1:736629143355:web:2fd39ecec530230dde291e",
};

/**
 * Firebase application to consume
 */
const firebase = Firebase.initializeApp(config);

export { firebase };
