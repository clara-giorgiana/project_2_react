import { initializeApp } from "firebase/app";
import firebaseConfig from "../../configs/firebase.js";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

initializeApp(firebaseConfig);
export const signOut = function() {
  return getAuth().signOut();
};

export const signInWithGoogle = function() {
  const auth = getAuth();
  return signInWithPopup(auth, googleProvider);
};

export const signInWithFacebook = function() {
  const auth = getAuth();
  return signInWithPopup(auth, facebookProvider);
};
