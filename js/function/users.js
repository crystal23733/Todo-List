// *HTML요소들
const subTitle = document.getElementById("sub-title");
const profile = document.getElementById("profile");
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const listForm = document.getElementById("list-form");
const listItem = document.getElementById("list-item");
const logout = document.getElementById("logout");

// *반복되는 값
const USERNAME_KEY = "username";
// !HIDDEN_KEY header에 선언됨

// *로그인폼에 입력 이벤트가 발생하게 되면 실행될 함수
const loginHandler = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginUser(username);
}

// *로그인폼 이벤트가 종료되면 실행될 함수
const loginUser = (username) => {
    subTitle.classList.add(HIDDEN_KEY);
    loginForm.classList.add(HIDDEN_KEY);
    logout.classList.remove(HIDDEN_KEY);
    profile.classList.remove(HIDDEN_KEY);
    listForm.classList.remove(HIDDEN_KEY);
    listItem.classList.remove(HIDDEN_KEY);
    profile.innerText = `${username}님 어서오세요.`;
}

// *로그아웃
const logoutHandler = (event) => {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    subTitle.classList.remove(HIDDEN_KEY);
    loginForm.classList.remove(HIDDEN_KEY);
    logout.classList.add(HIDDEN_KEY);
    profile.classList.add(HIDDEN_KEY);
    listForm.classList.add(HIDDEN_KEY);
    listItem.classList.add(HIDDEN_KEY);
    console.log("logout");
}

// *로컬스토리지에 있는 username 가져오기
const savedUser = localStorage.getItem(USERNAME_KEY);

// *로컬스토리지에 값이 없거나 있을 때 실행될 조건문
if(savedUser === null){
    loginForm.classList.remove(HIDDEN_KEY);
    loginForm.addEventListener("submit", loginHandler);
} else {
    logout.addEventListener('click', logoutHandler);
    loginUser(savedUser);
}