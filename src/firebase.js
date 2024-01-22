import firebase from "firebase" 

const firebaseConfig = {
    apiKey: "AIzaSyCP2uMP25ktYm_q-9lpLN6mieZ5ZOTnaAo",
    authDomain: "zithasloginhome.firebaseapp.com",
    projectId: "zithasloginhome",
    storageBucket: "zithasloginhome.appspot.com",
    messagingSenderId: "399032608641",
    appId: "1:399032608641:web:8e436686fb859db8d56a80"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
 
  export {auth}