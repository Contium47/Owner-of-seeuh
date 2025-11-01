import './styles/main.scss';
import './styles/tw.css';

import { initThemeToggle } from './js/common/theme.js';
import { initAbout } from './js/common/app/aboutPage.js';
initThemeToggle();
let cleanupFunction = () => {};

initAbout()
  .then((abortFn) => {
    cleanupFunction = abortFn;
    console.log('Ініціалізація About Page завершена. Функція скасування збережена.');
  })
  .catch((error) => {
    console.error('Помилка при ініціалізації About Page:', error);
  });