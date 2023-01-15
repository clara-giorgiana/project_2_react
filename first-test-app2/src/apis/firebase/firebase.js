// import * as firebase from 'firebase/app';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../configs/firebase'; 
import { initializeApp } from "firebase/app";

// Initialize Firebase
initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signOut = function() {
    return firebase.auth().signOut();
}

export const signInWithGoogle = function() {
    return firebase.auth().signInWithPopup(googleProvider);
}