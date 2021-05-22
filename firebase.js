import firebase from "firebase"
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDjhD2wgmKituTw-dVEWKdmMVWMiqxBmFo",
    authDomain: "facebook-clone-f89c7.firebaseapp.com",
    projectId: "facebook-clone-f89c7",
    storageBucket: "facebook-clone-f89c7.appspot.com",
    messagingSenderId: "511256101984",
    appId: "1:511256101984:web:f6cd2211ca6af4b46d6f05"
  }; 

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() ;
  
  const db = app.firestore();

  const storage = firebase.storage();


  export {db, storage }