  import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPlUKrFSoyhVTWgtalxEL_ttAnfR5z4P0",
  authDomain: "whatsapp-clone-ashu.firebaseapp.com",
  projectId: "whatsapp-clone-ashu",
  storageBucket: "whatsapp-clone-ashu.appspot.com",
  messagingSenderId: "61817125014",
  appId: "1:61817125014:web:55b85bc55ab0fe7393eab7",
  measurementId: "G-DLJ7R77H8D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;