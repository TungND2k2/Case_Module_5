import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBET1ika-4EP4tcjq-sZXM-YT-9INtk8Xw",
    authDomain: "dang-ki-viec-lam.firebaseapp.com",
    projectId: "dang-ki-viec-lam",
    storageBucket: "dang-ki-viec-lam.appspot.com",
    messagingSenderId: "4665797295",
    appId: "1:4665797295:web:ab1ed496acda1b36e8c25a",
    measurementId: "G-SB90N8JN8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
