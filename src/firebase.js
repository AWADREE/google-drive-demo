import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMIAN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const firestore = app.firestore();

//we created an object called databse that contains an property called folders
//then we assigned the collection from firestore called folders to that property
//and then we exported it instead of exporting all of firestore
//we did the same for files and then we added a property and assigned it the timestamp of the server wich is a function

export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();
export default app;
