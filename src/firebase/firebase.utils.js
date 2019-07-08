import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhmaj3W5GBS9GgIn9A3Mwgyl5RegdDDfk",
    authDomain: "blr-clothes-db.firebaseapp.com",
    databaseURL: "https://blr-clothes-db.firebaseio.com",
    projectId: "blr-clothes-db",
    storageBucket: "",
    messagingSenderId: "851157547251",
    appId: "1:851157547251:web:bd64bdb82210165c"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
