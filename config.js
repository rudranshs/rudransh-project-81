import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB-wNyBcfWl-yWfGdnvCKVRg2o6sKc85es",
  authDomain: "e-ride-dfab4.firebaseapp.com",
  projectId: "e-ride-dfab4",
  storageBucket: "e-ride-dfab4.appspot.com",
  messagingSenderId: "368646506234",
  appId: "1:368646506234:web:c13831032262a833f8eb43"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
