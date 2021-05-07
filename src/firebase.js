import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM6kdyLjl2M2zNJ7HNqy2pU8cZEdaxdsw",
  authDomain: "linkedin-e8289.firebaseapp.com",
  databaseURL: "https://linkedin-e8289-default-rtdb.firebaseio.com",
  projectId: "linkedin-e8289",
  storageBucket: "linkedin-e8289.appspot.com",
  messagingSenderId: "503536628199",
  appId: "1:503536628199:web:8dcd72ea2f2035257f4d42",
  measurementId: "G-2X36X74BJF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
