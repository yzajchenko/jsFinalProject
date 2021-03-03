function menu(){
    const menuItem = document.querySelectorAll('.menu__item');
    menuItem.forEach((item) => {
        let link = item.querySelector('a').href;
        if(link === document.location.href){
            item.classList.add('active');
        }
    })
}

function closeAplication(){
    let btn = document.querySelector('.btn');
    btn.addEventListener('click',()=>{
        delete localStorage.userAuthorization;
        document.location.href = "../login/login.html";
    })
}

export {menu, closeAplication};


