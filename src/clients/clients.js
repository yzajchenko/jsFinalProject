import './style.css';
let menuItem = document.querySelectorAll('.menu__item');

menuItem.forEach((item)=>{
    let link = item.querySelector('a').href;
    if(link === document.location.href){
        item.classList.add('active');
    }
})

let clientInfo = document.querySelector('#client-info');

fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
.then(response => response.json()) 
.then(data => {
    let tbody = document.createElement('tbody');
    
    tbody.append(
    data.map((item) => {
        `<tr>
          <td>${item.name}</td>
          <td>${item.company}</td>
          <td>${item.phone}</td>
          <td>${item.balance}</td>
          <td>${item.registered}</td>
        </tr>`}).join('')
    )
    clientInfo.append(tbody);
})

.catch(error => console.error(error))
