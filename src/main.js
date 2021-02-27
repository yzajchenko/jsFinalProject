let user = localStorage.getItem();

if(user !== null){
    let userLocal = JSON.parse(user);
    if (userLocal.session){
        document.location.href = "../main/index.html";
    }
    else {
        document.location.href = "../login/index.html";
    }
}
else{
    document.location.href = "../login/index.html";
}