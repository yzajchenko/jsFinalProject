const url = window.location.href;
const user = localStorage.getItem('userAuthorization');

function authorization() {
  if (!user) {
    if (url.indexOf('/login/login.html') !== -1 || url.indexOf('/authorization/authorization.html') !== -1 ) {
      return false;
    }
    else{
      document.location.href = "../login/login.html";
    }
  }
}

authorization();