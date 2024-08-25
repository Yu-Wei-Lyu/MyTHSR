import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

// 設置 Google 提供商
const provider = new GoogleAuthProvider();

// 元素選取器
const loginSection = document.getElementById('loginSection');
const titleBar = document.getElementById('titleBar');
const userNameDisplay = document.getElementById('userName');
const googleSignInButton = document.getElementById('googleSignInButton');
const logoutButton = document.getElementById('logoutButton');

// 登入按鈕事件
googleSignInButton.addEventListener('click', () => {
  signInWithRedirect(auth, provider)
    .then((result) => {
      console.log("登入成功", result.user);
      // 顯示使用者名稱
      showUserDetails(result.user);
    })
    .catch((error) => {
      console.error("登入失敗", error);
      alert(`登入失敗: ${error.message}`);
    });
});

// 登出按鈕事件
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log("登出成功");
      // 回到登入介面
      showLoginInterface();
    })
    .catch((error) => {
      console.error("登出失敗", error);
    });
});

// 監聽使用者登入狀態變化
onAuthStateChanged(auth, (user) => {
  if (user) {
    // 使用者已登入，顯示使用者資訊
    showUserDetails(user);
  } else {
    // 使用者未登入，顯示登入介面
    showLoginInterface();
  }
});

// 顯示使用者資訊
function showUserDetails(user) {
  loginSection.style.display = 'none';
  titleBar.style.display = 'block';
  userNameDisplay.textContent = user.displayName;
}

// 顯示登入介面
function showLoginInterface() {
  loginSection.style.display = 'block';
  titleBar.style.display = 'none';
}
