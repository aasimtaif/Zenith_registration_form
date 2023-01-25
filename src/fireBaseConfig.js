// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnSoxiDv0ZPuewmT_Sb2TuLgcPjFMqvNk",
    authDomain: "contact-form-ec9fa.firebaseapp.com",
    databaseURL: "https://contact-form-ec9fa-default-rtdb.firebaseio.com",
    projectId: "contact-form-ec9fa",
    storageBucket: "contact-form-ec9fa.appspot.com",
    messagingSenderId: "928890023227",
    appId: "1:928890023227:web:01719bd81b58dcb7e9db1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export { db, storage }