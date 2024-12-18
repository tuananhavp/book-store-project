import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  apiKey: "AIzaSyAYr__-zIjKCK0d_WfSiaqnpEUgz4412Qk",
  authDomain: "book-store-app-f3a33.firebaseapp.com",
  projectId: "book-store-app-f3a33",
  storageBucket: "book-store-app-f3a33.firebasestorage.app",
  messagingSenderId: "907625040234",
  appId: "1:907625040234:web:f3def2b9626dcb07697d13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
