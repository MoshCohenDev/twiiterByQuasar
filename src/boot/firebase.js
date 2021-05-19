import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb3aAbMWjGaIJFA7UrRybbxe8bFAJ_Ibo",
  authDomain: "qwitter-project.firebaseapp.com",
  projectId: "qwitter-project",
  storageBucket: "qwitter-project.appspot.com",
  messagingSenderId: "352365909281",
  appId: "1:352365909281:web:89e0507f8486e7f1311a60",
  measurementId: "G-T95R75B6K5"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseDb = firebase.firestore()
let firebaseAuth = firebaseApp.auth()
export {firebaseAuth, firebaseDb}
export default {
  firebase,firebaseAuth,
}

