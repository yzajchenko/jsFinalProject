import './style.scss';

window.addEventListener('load', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('input[name = email]').value;
    const password = document.querySelector('input[name = password]').value;
    const user = localStorage.getItem(email);

    if (user !== null) {
      const userLocal = JSON.parse(user);
      if (userLocal.password1 === password) {
        localStorage.setItem('userAuthorization', email);
        document.location.href = "../home/home.html";
      }
      else {
        alert('Пароль не верый');
      }
    }
    else {
      alert('Такого пользователя не существует');
    }
  })
})