import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyBDXVAXVWp-tGTQb7UIyFWxk3yYP606gyw",
  authDomain: "mania-gamestore.firebaseapp.com",
  projectId: "mania-gamestore",
  storageBucket: "mania-gamestore.appspot.com",
  messagingSenderId: "682072827106",
  appId: "1:682072827106:web:d1a39760b390affa4c6abb"
};

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}

export const database = firebase.firestore();