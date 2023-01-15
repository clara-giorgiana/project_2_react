// import * as firebase from 'firebase/app';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import firebaseConfig from '../../configs/firebase'; 
// import { initializeApp } from "firebase/app";

// // Initialize Firebase
// initializeApp(firebaseConfig);

// // firebase.initializeApp(firebaseConfig);
// const googleProvider = new firebase.auth.GoogleAuthProvider()

// export const signOut = function() {
//     return firebase.auth().signOut();
// }

// export const signInWithGoogle = function() {
//     return firebase.auth().signInWithPopup(googleProvider);
// }

// import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../configs/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



firebase.initializeApp(firebaseConfig);
// const googleProvider = new firebase.auth.GoogleAuthProvider()
const googleProvider = new GoogleAuthProvider();

export const signOut = function() {
    return firebase.auth().signOut();
}

export const signInWithGoogle = function() {
    return this.signInwithGoogle();
        
    
}

function signInwithGoogle () {
    const auth = getAuth();
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
}


