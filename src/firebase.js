// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBwJa7MuNL2F6WUdrXi3phF71-90rjUj0Y",
    authDomain: "linkedin-clone-f34be.firebaseapp.com",
    projectId: "linkedin-clone-f34be",
    storageBucket: "linkedin-clone-f34be.appspot.com",
    messagingSenderId: "559193752281",
    appId: "1:559193752281:web:73c2857697cffac631b4c8",
    measurementId: "G-HCXN15DH2K"
  };

  // type "npm add firebase" in the terminal 

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore(); 

  const auth = firebase.auth(); 

  export { db, auth }; 