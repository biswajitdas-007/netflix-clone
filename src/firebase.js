import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKdxkoE5KfUMCsMGW7XIzsCPO5558HU1c",
  authDomain: "netflix-clone-eb658.firebaseapp.com",
  projectId: "netflix-clone-eb658",
  storageBucket: "netflix-clone-eb658.appspot.com",
  messagingSenderId: "277808959385",
  appId: "1:277808959385:web:173f69d75545eff6108d08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
