// firebase-auth.js
import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// 設置 Google 提供商
const provider = new GoogleAuthProvider();

// 登入功能
document.getElementById('googleSignInButton').addEventListener('click', function() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // 登入成功
      const user = result.user;
      console.log("登入成功", user);
      alert(`歡迎, ${user.displayName}!`);
    })
    .catch((error) => {
      // 登入失敗
      console.error("登入失敗", error);
      alert(`登入失敗: ${error.message}`);
    });
});
