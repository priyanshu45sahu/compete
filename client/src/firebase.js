// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsGr5922YuYwqKCTAl28PiBY2zW8v6hQI",
    authDomain: "compete-ef8a0.firebaseapp.com",
    databaseURL: "https://compete-ef8a0-default-rtdb.firebaseio.com",
    projectId: "compete-ef8a0",
    storageBucket: "compete-ef8a0.firebasestorage.app",
    messagingSenderId: "260922377719",
    appId: "1:260922377719:web:22e2344bea57f2c8ce9af2",
    measurementId: "G-E41FF8VD6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);
export { database };