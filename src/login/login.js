import './style.css';
let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let email = document.querySelector('input[name = email]').value;
    let password = document.querySelector('input[name = password]').value;
    let user = localStorage.getItem(email);

    if(user !== null){
        let userLocal = JSON.parse(user);
        if (userLocal.password1 === password){
            document.location.href = "../main/index.html";
        }
        else {
            alert('Пароль не верый');
        }
    }
    else {
        alert('Такого пользователя не существует');
    }
})