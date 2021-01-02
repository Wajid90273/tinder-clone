import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKUgIUPhrx-zL-DEKTHUqVPAfUa6kKlOw",
  authDomain: "tinder-clone-5b434.firebaseapp.com",
  projectId: "tinder-clone-5b434",
  storageBucket: "tinder-clone-5b434.appspot.com",
  messagingSenderId: "900312411579",
  appId: "1:900312411579:web:96abb94512607f81d0289e",
  measurementId: "G-E5SVR821H5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;