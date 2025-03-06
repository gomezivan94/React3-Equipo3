import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDr9aBz9-bWRjzPca8w3Suya9u1zaK62vI",
  authDomain: "pay2win-135b3.firebaseapp.com",
  projectId: "pay2win-135b3",
  storageBucket: "pay2win-135b3.firebasestorage.app",
  messagingSenderId: "1005596260150",
  appId: "1:1005596260150:web:769bf397404b8c4aac6597"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export { app, auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, signOut, sendPasswordResetEmail }; 
