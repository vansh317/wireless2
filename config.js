import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD33kCIYsU_LZMGBf0f3t65_Hhw7wwTy9E",
    authDomain: "wireless-library-e2b59.firebaseapp.com",
    projectId: "wireless-library-e2b59",
    storageBucket: "wireless-library-e2b59.appspot.com",
    messagingSenderId: "859868527519",
    appId: "1:859868527519:web:4e3eb7718d1d7e5ab11baa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();