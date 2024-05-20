import { USERNAME_KEY } from "./modules/KEY.js";
import { displayItem } from "./modules/function/displayItem.js";
import { login, logout, profile, subTitle, list } from "./modules/selector.js";

displayItem.addItem(profile);
displayItem.addItem(list.listForm);
displayItem.addItem(list.listItem);

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
    displayItem.removeItem(logout);
    displayItem.removeItem(profile);
    displayItem.removeItem(list.listForm);
    displayItem.flexItem(list.listItem);
    profile.innerText = `${username}님 어서오세요.`;
}

// *로그아웃
const logoutHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    displayItem.removeItem(subTitle);
    displayItem.removeItem(login.loginForm);
    displayItem.addItem(logout);
    displayItem.addItem(profile);
    displayItem.addItem(list.listForm);
    displayItem.addItem(list.listItem);
    console.log("logout");
}

// *로컬스토리지에 있는 username 가져오기
const savedUser = localStorage.getItem(USERNAME_KEY);

// *로컬스토리지에 값이 없거나 있을 때 실행될 조건문
if(savedUser === null){
    displayItem.removeItem(login.loginForm);
    login.loginForm.addEventListener("submit", loginHandler);
} else {
    logout.addEventListener('click', logoutHandler);
    loginUser(savedUser);
}

// todo 모듈화 진행한 함수 주석처리 완료
// todo 시험 필요