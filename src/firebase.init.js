// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABFSEj8U2vJaofvb2hjNAd7o-lHJwu314",
    authDomain: "cycle-parts-hut.firebaseapp.com",
    projectId: "cycle-parts-hut",
    storageBucket: "cycle-parts-hut.appspot.com",
    messagingSenderId: "1041322889093",
    appId: "1:1041322889093:web:51d006e042639706317eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;