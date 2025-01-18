import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAKSixEicWLTv5lPxo2CGVNq2wOrbDsBg",
  authDomain: "test-app-e27fe.firebaseapp.com",
  projectId: "test-app-e27fe",
  storageBucket: "test-app-e27fe.appspot.com",
  messagingSenderId: "285966687345",
  appId: "1:285966687345:web:2b307394fb94efc481cfd0",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
