let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let email = document.querySelector('input[name = email]').value;
    let password1 = document.querySelector('input[name = password1]').value;
    let password2 = document.querySelector('input[name = password2]').value;
    let reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
    let res = reg.test(email);
    let user = {};
    let userLocal = localStorage.getItem(email);

    if(!res){
        alert('Неправильно введен email')
    }
    else if (userLocal){
        alert('Пользователь с таким именем уже существует');
    }
    else if(password1 !== password2){
        alert('Пароли не совпадают')
    }
    else {
        user.email = email;
        user.password1 = password1;
        localStorage.setItem(email, JSON.stringify(user));
        localStorage.setItem('userAuthorization', email);
        document.location.href = "../home/home.html";
    }
})