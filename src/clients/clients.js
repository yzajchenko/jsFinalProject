import './style.css';
let menuItem = document.querySelectorAll('.menu__item');
let url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';

menuItem.forEach((item)=>{
    let link = item.querySelector('a').href;
    if(link === document.location.href){
        item.classList.add('active');
    }
})

let clientInfo = document.querySelector('#client-info table');


async function getClien(url){
    let response = await fetch(url);
    let clients =  await response.json();

    let tbody = document.createElement('tbody');
            clients.map((items) => {
                let tr = document.createElement('tr');
                const name = document.createElement('td');
                const company = document.createElement('td');
                const email = document.createElement('td');
                const phone = document.createElement('td');
                const balance = document.createElement('td');
                const registered = document.createElement('td');
                const btnDelete = document.createElement('button');
                btnDelete.classList.add('btnDelete');
                btnDelete.append('Удалить');

                name.append(items.name);
                company.append(items.company);
                email.append(items.email);
                phone.append(items.phone);
                balance.append(items.balance);
                registered.append(items.registered);
                if(!items.isActive){
                    tr.classList.add('isActive');
                }

                tr.append(name, company, email, phone, balance, registered, btnDelete);
                tbody.append(tr);
            })
    clientInfo.append(tbody); 
}
getClien(url);


let btn = document.querySelector('#client-info');
let modal = document.querySelector('.openModal');
let btnOk = modal.querySelector('.btn-ok');
let btnCancle = modal.querySelector('.btn-cancle');
let notification = document.querySelector('.notification');
let notificationBtn = notification.querySelector('.notification__btn');

btn.addEventListener('click', (e)=>{
    let target = e.target;
    if(target.className === "btnDelete"){
        modal.classList.add('open');
    
        btnOk.addEventListener('click',()=>{
            modalClose();
            target.parentNode.remove();
            notification.classList.add('open');
        });
        btnCancle.addEventListener('click',()=>{
            modalClose();
        });
    }
})

function modalClose(){
    modal.classList.remove('open');
}


notificationBtn.addEventListener('click',()=>{
    notification.classList.remove('open');
})

