import { HIDDEN_KEY, USERNAME_KEY } from "./modules/KEY.js";
import { displayItem } from "./modules/function/displayItem.js";
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
    displayItem.addItem(subTitle);
    displayItem.addItem(login.loginForm);
    logout.classList.remove(HIDDEN_KEY);
    // displayItem.removeItemBlock(logout);
    profile.classList.remove(HIDDEN_KEY);
    // displayItem.removeItemBlock(profile);
    list.listForm.classList.remove(HIDDEN_KEY);
    // displayItem.removeItemBlock(list.listForm);
    list.listItem.classList.remove(HIDDEN_KEY);
    // displayItem.removeItemBlock(list.listItem);
    profile.innerText = `${username}님 어서오세요.`;
}

// *로그아웃
const logoutHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    subTitle.classList.remove(HIDDEN_KEY);
    // displayItem.removeItemBlock(subTitle);
    login.loginForm.classList.remove(HIDDEN_KEY);
    // displayItem.removeItemBlock(login.loginForm);
    logout.classList.add(HIDDEN_KEY);
    // displayItem.addItem(logout);
    profile.classList.add(HIDDEN_KEY);
    // displayItem.addItem(profile);
    list.listForm.classList.add(HIDDEN_KEY);
    // displayItem.addItem(list.listForm);
    list.listItem.classList.add(HIDDEN_KEY);
    // displayItem.addItem(list.listItem);
    console.log("logout");
}

// *로컬스토리지에 있는 username 가져오기
const savedUser = localStorage.getItem(USERNAME_KEY);

// *로컬스토리지에 값이 없거나 있을 때 실행될 조건문
if(savedUser === null){
    login.loginForm.classList.remove(HIDDEN_KEY);
    // displayItem.removeItemBlock(login.loginForm);
    login.loginForm.addEventListener("submit", loginHandler);
} else {
    logout.addEventListener('click', logoutHandler);
    loginUser(savedUser);
}

// todo 모듈화 진행한 함수 주석처리 완료
// todo 시험 필요