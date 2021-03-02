let url = window.location.href;
let user = localStorage.getItem('userAuthorization');

if(user){
    if(url !== document.location.href){
        document.location.href = "../home/home.html";
    }
}   
else{
    if(url == '../login/login.html'){
       document.location.href = "../login/login.html";
    }
}

