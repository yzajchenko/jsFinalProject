import detect from 'detect.js'
import './style.css';
import {menu, closeAplication} from '../menu/menu';

window.addEventListener('load',()=>{
    menu();
    closeAplication();

    let content = document.querySelector('.content');
    let userInfo = detect.parse(navigator.userAgent);
    let browserFamily = userInfo.browser.family;
    let browserVersion = userInfo.browser.version;
    let osName = userInfo.os.name;
    content.append(`Browser: ${browserFamily} Browser version: ${browserVersion} OS: ${osName}`);
})

