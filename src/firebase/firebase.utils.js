import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCXc-29jrfsEvRlOACBQaLnnG-2DjYtjJ8",
  authDomain: "crwn-db-d9563.firebaseapp.com",
  databaseURL: "https://crwn-db-d9563.firebaseio.com",
  projectId: "crwn-db-d9563",
  storageBucket: "",
  messagingSenderId: "927706596614",
  appId: "1:927706596614:web:e4c049538d078815"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;