import { logout, menu, title } from '../../selector.js';
import { displayItem } from '../displayItem.js';

displayItem.addItem(menu.menuBarUl);
displayItem.addItem(logout);

export const menuOpenHandler = () => {
  displayItem.removeItem(menu.menuBarUl);
  for (let i = 0; i < menu.menuList.length; i++) {
    displayItem.removeItem(menu.menuList[i]);
    let height = title.clientHeight;
    const openAnime = () => {
      height += 5;
      if (height < 260) {
        title.style.height = `${height}px`;
        cancelAnimationFrame(openAnime);
      }
      requestAnimationFrame(openAnime);
    };
    requestAnimationFrame(openAnime);
  }
};

export const menuCloseHandler = () => {
  displayItem.addItem(menu.menuBarUl);
  for (let i = 0; i < menu.menuList.length; i++) {
    displayItem.addItem(menu.menuList[i]);
    let height = title.clientHeight;
    const closeAnime = () => {
      height -= 5;
      if (height > 179) {
        title.style.height = `${height}px`;
        cancelAnimationFrame(closeAnime);
      }
      requestAnimationFrame(closeAnime);
    };
    requestAnimationFrame(closeAnime);
  }
};
