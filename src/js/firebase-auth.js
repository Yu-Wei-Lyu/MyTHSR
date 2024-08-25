import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

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
  signInWithRedirect(auth, provider);
});

// 獲取重定向結果並處理
getRedirectResult(auth)
  .then((result) => {
    if (result && result.user) {
      console.log("登入成功", result.user);
      showUserDetails(result.user);
    }
  })
  .catch((error) => {
    console.error("登入失敗", error);
    alert(`登入失敗: ${error.message}`);
  });

// 使用 onAuthStateChanged 確認用戶狀態
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("使用者已登入", user);
    showUserDetails(user);
  } else {
    console.log("使用者未登入");
    showLoginInterface();
  }
});

// 登出按鈕事件
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log("登出成功");
      showLoginInterface();
    })
    .catch((error) => {
      console.error("登出失敗", error);
    });
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
