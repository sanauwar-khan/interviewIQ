
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-74893.firebaseapp.com",
  projectId: "interviewiq-74893",
  storageBucket: "interviewiq-74893.firebasestorage.app",
  messagingSenderId: "267433497784",
  appId: "1:267433497784:web:2aebc47e2c6abe9b8d504d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}