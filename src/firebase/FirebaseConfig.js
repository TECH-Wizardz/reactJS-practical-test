// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm36mucX8ZQi5zgBu1UVs4rpgtDPzbhO0",
  authDomain: "hobby-app-aabe0.firebaseapp.com",
  projectId: "hobby-app-aabe0",
  storageBucket: "hobby-app-aabe0.appspot.com",
  messagingSenderId: "331625884796",
  appId: "1:331625884796:web:bccd664c15441989eeadf9",
  measurementId: "G-ZRZN7K4P2M",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
