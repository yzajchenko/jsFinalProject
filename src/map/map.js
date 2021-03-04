import { Loader } from "@googlemaps/js-api-loader";
import './style.scss';

import { menu, closeAplication } from '../menu/menu';

window.addEventListener('load', () => {
  menu();
  closeAplication();

  class MarkerMaps {
    constructor(contentString, myLatLng, map){
      this.contentString = contentString;
      this.myLatLng = myLatLng;

      this.infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      this.marker = new google.maps.Marker({
        position: this.myLatLng,
        map,
      });
      this.marker.addListener("click", () => {
        this.infowindow.open(map, this.marker);
      });   
    }
  }



  const loader = new Loader({
    apiKey: "AIzaSyDs_IElo62FQJM-Ngcwejx79HZXX3AxKDg",
    version: "weekly"
  });

  loader.load().then(() => {
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 53.897299, lng: 27.529061 },
      zoom: 12,
    });

    const marker1 = new MarkerMaps('IT Shatle', { lat: 53.897299, lng: 27.529061 }, map);
    const marker2 = new MarkerMaps('Станция метро: Молодёжная', { lat: 53.906763, lng: 27.522894 }, map);
    const marker3 = new MarkerMaps('Торгово-выставочный центр "Карога"', { lat: 53.907721, lng: 27.527797 }, map);
    const marker4 = new MarkerMaps('Клуб "Берлин"', { lat: 53.906969, lng: 27.529609 }, map);
    const marker5 = new MarkerMaps('Администрация Фрунзенского района г. Минска', { lat: 53.908194, lng: 27.509143 }, map);
    const marker6 = new MarkerMaps('Станция метро: Молодёжная: Фрунзенская', { lat: 53.904922, lng: 27.538992 }, map);
    const marker7 = new MarkerMaps('ТЦ Немига', { lat: 53.903984, lng: 27.552272 }, map);
    const marker8 = new MarkerMaps('ТРЦ Galleria Minsk', { lat: 53.908507, lng: 27.548407 }, map);
    const marker9 = new MarkerMaps('Администрация Центрального района г.Минска', { lat: 53.907723, lng: 27.543310 }, map);
    const marker10 = new MarkerMaps('Минск-Пассажирский', { lat: 53.890813, lng: 27.551012 }, map);
    const marker11 = new MarkerMaps('ТЦ Столица', { lat: 53.895505, lng: 27.547909 }, map);
    const marker12 = new MarkerMaps('Станция метро: Молодёжная', { lat: 53.905714, lng: 27.553792 }, map);
    const marker13 = new MarkerMaps('Минск-Восточный', { lat: 53.890793, lng: 27.585830 }, map);
    const marker14 = new MarkerMaps('Автоцентр Citroen', { lat: 53.892349, lng: 27.586814 }, map);
    const marker15 = new MarkerMaps('Большой театр Беларуси', { lat: 53.910007, lng: 27.561417 }, map);
  });
})