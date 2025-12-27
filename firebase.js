// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHgSgQZ0Md3G4DCfoHGqSiEB6zl8Drxps",
  authDomain: "voyageverse-final.firebaseapp.com",
  projectId: "voyageverse-final",
  storageBucket: "voyageverse-final.firebasestorage.app",
  messagingSenderId: "393627965214",
  appId: "1:393627965214:web:bd66820013aa109dfc5b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);