import detect from 'detect.js'
import './style.css';

let menuItem = document.querySelectorAll('.menu__item');
let content = document.querySelector('.content');
let userInfo = detect.parse(navigator.userAgent);
let browserFamily = userInfo.browser.family;
let browserVersion = userInfo.browser.version;
let osName = userInfo.os.name;
content.append(`Browser: ${browserFamily} Browser version: ${browserVersion} OS: ${osName}`);
menuItem.forEach((item)=>{
    let link = item.querySelector('a').href;
    if(link === document.location.href){
        item.classList.add('active');
    }
})