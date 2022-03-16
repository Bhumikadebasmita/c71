import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBbl2u9f0nBr8sz889gYgN7LHWFSgo5Ycg",
    authDomain: "e-ride-stage-928b7.firebaseapp.com",
    projectId: "e-ride-stage-928b7",
    storageBucket: "e-ride-stage-928b7.appspot.com",
    messagingSenderId: "914078813597",
    appId: "1:914078813597:web:3d85b0769c144d60737374"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
