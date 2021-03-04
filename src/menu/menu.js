function menu() {
  const menuItem = document.querySelectorAll('.menu__item');
  menuItem.forEach((item) => {
    const link = item.querySelector('a').href;
    if (link === document.location.href) {
      item.classList.add('active');
    }
  })
}

function closeAplication(){
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    delete localStorage.userAuthorization;
    document.location.href = "../login/login.html";
  })
}

export { menu, closeAplication };