// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVSFvof0VCAwRaWLPodrE4adrFja-PkRQ",
    authDomain: "origincloud-fde2a.firebaseapp.com",
    projectId: "origincloud-fde2a",
    storageBucket: "origincloud-fde2a.appspot.com",
    messagingSenderId: "909976217407",
    appId: "1:909976217407:web:cbaba75a435fb3f23a958a",
    measurementId: "G-GCMB14Y06F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);