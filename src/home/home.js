import detect from 'detect.js'
import './style.scss';
import { menu, closeAplication } from '../menu/menu';

window.addEventListener('load', () => {
  menu();
  closeAplication();

  const content = document.querySelector('.content');
  const userInfo = detect.parse(navigator.userAgent);
  const browserFamily = userInfo.browser.family;
  const browserVersion = userInfo.browser.version;
  const osName = userInfo.os.name;
  content.append(`Browser: ${browserFamily} Browser version: ${browserVersion} OS: ${osName}`);
})