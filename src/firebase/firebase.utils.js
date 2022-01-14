import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBPcdBYuj8LCGObj-sW96a04s66Pz2Voak",
  authDomain: "crwn-clothing-782a4.firebaseapp.com",
  projectId: "crwn-clothing-782a4",
  storageBucket: "crwn-clothing-782a4.appspot.com",
  messagingSenderId: "90333840445",
  appId: "1:90333840445:web:d5d4c47a40fb3571de9654",
  measurementId: "G-DRVGZ0GLND"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
