import './style.css';

let menuItem = document.querySelectorAll('.menu__item');
let content = document.querySelector('.content');
let userInfo = window.navigator.userAgent;
content.append(userInfo);
menuItem.forEach((item)=>{
    let link = item.querySelector('a').href;
    if(link === document.location.href){
        item.classList.add('active');
    }
})