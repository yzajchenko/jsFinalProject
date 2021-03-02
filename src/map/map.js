import { Loader } from "@googlemaps/js-api-loader";
import './style.css';
const menuItem = document.querySelectorAll('.menu__item');
menuItem.forEach((item) => {
    let link = item.querySelector('a').href;
    if(link === document.location.href){
        item.classList.add('active');
    }
})




const loader = new Loader({
    apiKey: "AIzaSyDs_IElo62FQJM-Ngcwejx79HZXX3AxKDg",
    version: "weekly"
  });
  loader.load().then(() => {
   let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 53.897318, lng: 27.529070 },
      zoom: 18,
    });
  });