import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDKr0eKfr9XaZwmaVX9A5_fjXiqkcSXYL8",
    authDomain: "fir-crud-p.firebaseapp.com",
    projectId: "fir-crud-p",
    storageBucket: "fir-crud-p.appspot.com",
    messagingSenderId: "935939411568",
    appId: "1:935939411568:web:e28678f82951019261eeb5"
  };
  

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();