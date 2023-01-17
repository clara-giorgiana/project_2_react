import {initializeApp} from 'firebase/app';
// import 'firebase/auth';
import firebaseConfig from '../../configs/firebase.js';


// const googleProvider = new firebase.auth.GoogleAuthProvider()

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

initializeApp(firebaseConfig);
export const signOut = function() {
    return getAuth().signOut();
}

export const signInWithGoogle = function() {
  const auth = getAuth();
  return signInWithPopup(auth, provider);
}


