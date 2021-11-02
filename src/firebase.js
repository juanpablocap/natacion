import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCrRd47zRnPjAsbMYTs5xmZvwXj2i76FKA",
    authDomain: "crud1-2e8e0.firebaseapp.com",
    projectId: "crud1-2e8e0",
    storageBucket: "crud1-2e8e0.appspot.com",
    messagingSenderId: "606159477982",
    appId: "1:606159477982:web:65584175c9e24ea319b64f"
  };

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
 
  export const db = fb.firestore();

