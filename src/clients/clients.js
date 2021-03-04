import './style.scss';
import { menu, closeAplication } from '../menu/menu';


window.addEventListener('load', () => {
  menu();
  closeAplication();

  const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';

  function scroll(){
    const scroll = document.querySelector('.scroll');
        
    scroll.classList.add('active'); 

    scroll.addEventListener('click', () => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
  }


  const info = document.querySelector('.client-info');
  const clientInfo = document.querySelector('.client-info table');

  async function getClien(url, calback){

    const response = await fetch(url);

    const clients =  await response.json();
    let male = 0;
    let famale = 0;
    let maxBalance = '$0';

    const tbody = document.createElement('tbody');
    clients.map((items) => {

      if (items.gender === 'male') {
        male++;
      }
      else{
        famale++;
      }

      if (items.balance > maxBalance) {
        maxBalance = items.balance;
      }

      const tr = document.createElement('tr'),
        name = document.createElement('td'),
        company = document.createElement('td'),
        email = document.createElement('td'),
        phone = document.createElement('td'),
        balance = document.createElement('td'),
        registered = document.createElement('td'),
        btnDelete = document.createElement('button');
      btnDelete.classList.add('btn-delete');
      btnDelete.append('Удалить');

      name.append(items.name);
      company.append(items.company);
      email.append(items.email);
      phone.append(items.phone);
      balance.append(items.balance);
      registered.append(items.registered);
      if (!items.isActive) {
        tr.classList.add('is-active');
      }

      tr.append(name, company, email, phone, balance, registered, btnDelete);
      tbody.append(tr);
    })

    clientInfo.append(tbody);
    info.prepend(`Количество мужчин: ${male}   Количество женчин: ${famale}  Наибольший баланс: ${maxBalance}`);
    calback();
  }
  getClien(url, scroll);


  const btn = document.querySelector('.client-info');
  const modal = document.querySelector('.open-modal');
  const btnOk = modal.querySelector('.btn-ok');
  const btnCancle = modal.querySelector('.btn-cancle');
  const notification = document.querySelector('.notification');
  const notificationBtn = notification.querySelector('.notification__btn');

  btn.addEventListener('click', e => {
    const target = e.target;
    if (target.className === "btn-delete") {
      modal.classList.add('open');
    
      btnOk.addEventListener('click', () => {
        modalClose();
        target.parentNode.remove();
        notification.classList.add('open');
      });
      btnCancle.addEventListener('click', () => {
        modalClose();
      });
    }
  })

  function modalClose(){
    modal.classList.remove('open');
  }


  notificationBtn.addEventListener('click', () => {
    notification.classList.remove('open');
  })
})