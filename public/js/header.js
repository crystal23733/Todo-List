import {
  menuCloseHandler,
  menuOpenHandler,
} from './modules/function/menu/menuhandler.js';
import { menu, title } from './modules/selector.js';

menu.menuBar.addEventListener('click', menuOpenHandler);
// *mouseout을 주면 menubar밖으로만 빠져나가도 사라져버리기 때문에 title에 leave 할당
title.addEventListener('mouseleave', menuCloseHandler);
