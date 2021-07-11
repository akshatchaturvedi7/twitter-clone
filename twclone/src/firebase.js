import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_3QTIqkoXHIpOuAwHUjoyOJsVVo5EjMk",
    authDomain: "twitter-clone-8ab6c.firebaseapp.com",
    projectId: "twitter-clone-8ab6c",
    storageBucket: "twitter-clone-8ab6c.appspot.com",
    messagingSenderId: "234112754867",
    appId: "1:234112754867:web:0cbfad26eecc322d82fcc6",
    measurementId: "G-Z90ZEELLLL"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;