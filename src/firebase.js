import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDf3gas3-Y7_6d4JM6ElAhdEM-dv02HP68",
  authDomain: "message-47b97.firebaseapp.com",
  projectId: "message-47b97",
  storageBucket: "message-47b97.appspot.com",
  messagingSenderId: "398160060234",
  appId: "1:398160060234:web:fb69ce5761c5e1317eabb3",
};

const initFirebase = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = initFirebase.firestore();

export { auth, db, provider };
