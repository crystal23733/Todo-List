import { HIDDEN_KEY } from "./modules/KEY.js";
import { displayItem } from "./modules/function/displayItem.js";
import { menu, title } from "./modules/selector.js";

const menuOpenHandler = () => {
  menu.menuBarUl.classList.remove(HIDDEN_KEY);
  // displayItem.removeItem(menu.menuBarUl);
  for(let i = 0; i < menu.menuList.length; i++){
    menu.menuList[i].classList.remove(HIDDEN_KEY);
    // displayItem.removeItem(menu.menuList[i]);
    let height = title.clientHeight;
    const openAnime = () => {
      height += 5;
      if(height < 260){
        title.style.height = `${height}px`;
        cancelAnimationFrame(openAnime);
      }
      requestAnimationFrame(openAnime);
    }
    requestAnimationFrame(openAnime);
  }
}

const menuCloseHandler= () =>{
  menu.menuBarUl.classList.add(HIDDEN_KEY);
  // displayItem.addItem(menu.menuBarUl);
  for(let i = 0; i < menu.menuList.length; i++){
    menu.menuList[i].classList.add(HIDDEN_KEY);
    // displayItem.addItem(menu.menuList[i]);
    let height = title.clientHeight;
    const closeAnime = () => {
      height -= 5;
      if(height > 179){
        title.style.height = `${height}px`;
        cancelAnimationFrame(closeAnime);
      }
      requestAnimationFrame(closeAnime);
    }
    requestAnimationFrame(closeAnime);
  }
}


menu.menuBar.addEventListener("click", menuOpenHandler);
// *mouseout을 주면 menubar밖으로만 빠져나가도 사라져버리기 때문에 title에 leave 할당
title.addEventListener('mouseleave', menuCloseHandler);
