// *선택자 모듈

// *
export const title = document.getElementById("title");
export const menu = {
  menuBar : document.getElementById('menu-bar'),
  menuBarUl : document.getElementById('menu-bar').children[0],
  menuList : document.getElementsByClassName('menu-list'),
}
export const subTitle = document.getElementById("sub-title");
export const profile = document.getElementById("profile");


// *로그인 선택자
export const login = {
  loginForm : document.getElementById('login-form'),
  loginInput : document.getElementById('login-form').children[0],
}

export const logout = document.getElementById("logout");

// *리스트
export const list = {
  listForm : document.getElementById("list-form"),
  listItem : document.getElementById('list-item'),
  listItemUl : document.getElementById('list-item').children[0],
  listInput : document.getElementById("list-form").children[0],
}

// *footer 날씨
export const weather = {
  weathers : document.getElementById('weather'),
  tempIcon : document.getElementById('temp-icon'),
  tempText : document.getElementById('temp-text'),
  locations : document.getElementById('locations'),
}