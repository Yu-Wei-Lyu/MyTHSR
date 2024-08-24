// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmm8x-SKbYZMLOKaOLxFLDfZiSS3VZ6Cg",
  authDomain: "my-thsr.firebaseapp.com",
  projectId: "my-thsr",
  storageBucket: "my-thsr.appspot.com",
  messagingSenderId: "576441245405",
  appId: "1:576441245405:web:1f4d8a945affbde6fc8534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 將 auth 導出以便在其他文件中使用
export { auth };