import { HIDDEN_KEY, USERNAME_KEY } from "./modules/KEY.js";
import { login, logout, profile, subTitle, list } from "./modules/selector.js";

// *로그인폼에 입력 이벤트가 발생하게 되면 실행될 함수
const loginHandler = (event) => {
    event.preventDefault();
    const username = login.loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginUser(username);
}

// *로그인폼 이벤트가 종료되면 실행될 함수
const loginUser = (username) => {
    subTitle.classList.add(HIDDEN_KEY);
    login.loginForm.classList.add(HIDDEN_KEY);
    logout.classList.remove(HIDDEN_KEY);
    profile.classList.remove(HIDDEN_KEY);
    list.listForm.classList.remove(HIDDEN_KEY);
    list.listItem.classList.remove(HIDDEN_KEY);
    profile.innerText = `${username}님 어서오세요.`;
}

// *로그아웃
const logoutHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    subTitle.classList.remove(HIDDEN_KEY);
    login.loginForm.classList.remove(HIDDEN_KEY);
    logout.classList.add(HIDDEN_KEY);
    profile.classList.add(HIDDEN_KEY);
    list.listForm.classList.add(HIDDEN_KEY);
    list.listItem.classList.add(HIDDEN_KEY);
    console.log("logout");
}

// *로컬스토리지에 있는 username 가져오기
const savedUser = localStorage.getItem(USERNAME_KEY);

// *로컬스토리지에 값이 없거나 있을 때 실행될 조건문
if(savedUser === null){
    login.loginForm.classList.remove(HIDDEN_KEY);
    login.loginForm.addEventListener("submit", loginHandler);
} else {
    logout.addEventListener('click', logoutHandler);
    loginUser(savedUser);
}