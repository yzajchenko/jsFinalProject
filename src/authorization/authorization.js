import './style.scss';

window.addEventListener('load',() => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name = email]');
    const emailValue = email.value;
    const password1 = document.querySelector('input[name = password1]');
    const password1Value = password1.value;
    const password2 = document.querySelector('input[name = password2]');
    const password2Value = document.querySelector('input[name = password2]').value;
    const form = document.querySelector('form');
    const formImputs = form.elements;
    const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
    const res = reg.test(emailValue);
    const user = {};
    const userLocal = localStorage.getItem(emailValue);

    const errorText = document.querySelector('.error');

    if (errorText) {
      errorText.remove();
    }


    const error = document.createElement('div');
    error.classList.add('error');

    if(!res){
        error.append('Неверный email')
        email.parentNode.append(error);
      }
      else if (userLocal) {
        error.append('Пользователь с таким именем уже существует')
        email.parentNode.append(error);
      }
      else if (password1Value !== password2Value) {
        error.append('Пароли не совпадают')
        password2.parentNode.append(error);
      }
      else {
        user.email = emailValue;
        user.password1 = password1Value;
        localStorage.setItem(email, JSON.stringify(user));
        localStorage.setItem('userAuthorization', emailValue);
        document.location.href = "../home/home.html";
      }
  })
})