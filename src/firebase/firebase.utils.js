import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBPcdBYuj8LCGObj-sW96a04s66Pz2Voak",
  authDomain: "crwn-clothing-782a4.firebaseapp.com",
  projectId: "crwn-clothing-782a4",
  storageBucket: "crwn-clothing-782a4.appspot.com",
  messagingSenderId: "90333840445",
  appId: "1:90333840445:web:d5d4c47a40fb3571de9654",
  measurementId: "G-DRVGZ0GLND"
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
