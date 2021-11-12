// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3KanEScG7_T1mF0uelXBcrXMJq0lXIf0",
  authDomain: "reactflix-giang.firebaseapp.com",
  projectId: "reactflix-giang",
  storageBucket: "reactflix-giang.appspot.com",
  messagingSenderId: "726493026698",
  appId: "1:726493026698:web:db0f9e447d671e87d45073",
};

const firebaseInstance = initializeApp(firebaseConfig);

export const firestoreInstance = getFirestore(firebaseInstance);
export const authInstance = getAuth(firebaseInstance);
