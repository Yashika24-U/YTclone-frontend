
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOgSgPn_kv8hJVuFNHjdIQRaSi_qPRKcw",
  authDomain: "video-3b089.firebaseapp.com",
  projectId: "video-3b089",
  storageBucket: "video-3b089.appspot.com",
  messagingSenderId: "929656043660",
  appId: "1:929656043660:web:7be5d006fb7966b82e63a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app;