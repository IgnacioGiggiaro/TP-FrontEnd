import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
// @ts-ignore
import * as L from 'leaflet';


import {AuthService} from "@auth0/auth0-angular";
import {from} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = -32.95461;
  lng = -60.64382;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    this.mapInitializer();
  }

  marker = new google.maps.Marker({
    position: this.coordinates,

  });

  mapInitializer() {


    let mymap = L.map('map').setView([this.lat, this.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mymap);
    L.marker([-32.9547, -60.6439]).addTo(mymap)
      .bindPopup('¡Aquí estamos!')
      .openPopup();
  }


}
