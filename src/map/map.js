import './style.css';
const menuItem = document.querySelectorAll('.menu__item');
menuItem.forEach((item) => {
    let link = item.querySelector('a').href;
    if(link === document.location.href){
        item.classList.add('active');
    }
})