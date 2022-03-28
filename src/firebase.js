import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC12dar4-kQ5-J_EzYZgav6siZJUTFgcHg",
  authDomain: "otp-project-bc7c9.firebaseapp.com",
  projectId: "otp-project-bc7c9",
  storageBucket: "otp-project-bc7c9.appspot.com",
  messagingSenderId: "122402972767",
  appId: "1:122402972767:web:0830ead132fa1d453827ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
