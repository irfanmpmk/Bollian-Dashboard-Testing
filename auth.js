// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  signInWithCustomToken,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const auth = getAuth();
const firebaseConfig = {
  apiKey: "AIzaSyA0jojGW1O3QrWsaV6NhUu3sAeImSM2zEw",
  authDomain: "bullian-dashboard.firebaseapp.com",
  projectId: "bullian-dashboard",
  storageBucket: "bullian-dashboard.appspot.com",
  messagingSenderId: "664623169530",
  appId: "1:664623169530:web:ce9f58a789463e3d2bae43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById("register").addEventListener("click", function () {
  console.log("got CLicked");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      alert("Registration successful");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
