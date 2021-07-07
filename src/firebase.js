import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAk4tF9r5KZHU4-CIFWUVD9Fcp4OTTu4Hg",
    authDomain: "pixcal.firebaseapp.com",
    projectId: "pixcal",
    storageBucket: "pixcal.appspot.com",
    messagingSenderId: "47257332447",
    appId: "1:47257332447:web:56572bad5b79dd512bd76a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  export {auth}