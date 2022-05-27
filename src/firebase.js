import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2BXk42zdmF1-eMEaqIqRyK5reqlUch5M",
  authDomain: "fbmsgclone.firebaseapp.com",
  databaseURL: "https://fbmsgclone.firebaseio.com",
  projectId: "fbmsgclone",
  storageBucket: "fbmsgclone.appspot.com",
  messagingSenderId: "257750876050",
  appId: "1:257750876050:web:e4ba3d34cdbd81979c4b4b",
  measurementId: "G-53PSHX5FTW",
});

const db = firebaseApp.firestore();

export default db;
