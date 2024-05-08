const title = document.getElementById("title");
const menuBar = document.getElementById("menu-bar");
const menuBarUl = document.querySelector("#menu-bar ul");
const menuList = document.getElementsByClassName("menu-list");

const HIDDEN_KEY = "hidden";

const menuOpenHandler = () => {
  menuBarUl.classList.remove(HIDDEN_KEY);
  for(let i = 0; i < menuList.length; i++){
    menuList[i].classList.remove(HIDDEN_KEY);
    // let height = title.clientHeight;
    // const openAnime = () => {
    //   height += 5;
    //   if(height < 460){
    //     title.style.height = `${height}px`;
    //     cancelAnimationFrame(openAnime);
    //   }
    //   requestAnimationFrame(openAnime);
    // }
    // requestAnimationFrame(openAnime);
  }
}

const menuCloseHandler= () =>{
  menuBarUl.classList.add(HIDDEN_KEY);
  for(let i = 0; i < menuList.length; i++){
    menuList[i].classList.add(HIDDEN_KEY);
    // let height = title.clientHeight;
    // const closeAnime = () => {
    //   height -= 5;
    //   if(height > 179){
    //     title.style.height = `${height}px`;
    //     cancelAnimationFrame(closeAnime);
    //   }
    //   requestAnimationFrame(closeAnime);
    // }
    // requestAnimationFrame(closeAnime);
  }
}


menuBar.addEventListener("click", menuOpenHandler);
// *mouseout을 주면 menubar밖으로만 빠져나가도 사라져버리기 때문에 title에 leave 할당
title.addEventListener('mouseleave', menuCloseHandler);
