import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJxBpylQ6cQodpgiqtAJdT6MQPV2bexD0",
  authDomain: "emailauth-8a9ed.firebaseapp.com",
  projectId: "emailauth-8a9ed",
  storageBucket: "emailauth-8a9ed.appspot.com",
  messagingSenderId: "429679844186",
  appId: "1:429679844186:web:508e5217541e31ed03f163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
