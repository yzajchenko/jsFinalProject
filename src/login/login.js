import './style.scss';

window.addEventListener('load', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('input[name = email]');
    const emailValue = email.value;
    const password = document.querySelector('input[name = password]');
    const passwordValue = password.value;
    const user = localStorage.getItem(emailValue);

    const errorText = document.querySelector('.error');

    if (errorText) {
      errorText.remove();
    }


    const error = document.createElement('div');
    error.classList.add('error');

    if (user !== null) {
      const userLocal = JSON.parse(user);
      if (userLocal.password1 === passwordValue) {
        localStorage.setItem('userAuthorization', emailValue);
        document.location.href = "../home/home.html";
      }
      else {
        error.append('Пароль не верый')
        password.parentNode.append(error);
      }
    }
    else {
      error.append('Такого пользователя не существует')
      email.parentNode.append(error);
    }
  })
})