import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, Map } from 'leaflet';
import * as L from 'leaflet';
import { CovidService } from 'src/app/services/covid/covid.service';

@Component({
  selector: 'app-covid-in-map',
  templateUrl: './covid-in-map.component.html',
  styleUrls: ['./covid-in-map.component.scss'],
})
export class CovidInMapComponent implements OnInit {
  public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 2,
    center: latLng(46.879966, -121.726909),
  };
  public layers = [];
  public map: Map = null;
  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getStatistiqueMap().then((data) => {
      data.map((item) => {
        const circle = new L.Circle([item.lat, item.long], {
          color: 'red',
          stroke: true,
          opacity: item.cases > 100000 ? 0.7 : 1,
          fill: true,
          fillColor: '#f03',
          fillOpacity: 0.5,
          weight:
            item.cases > 200000
              ? 40
              : item.cases > 100000
              ? 30
              : item.cases > 100000
              ? 20
              : 11,
          lineCap: 'round',
        })
          .bindPopup(
            `<h5 class="popup-title">
            ${item.country}</h5>
            <h5 class="popup-content">
            <span class="case">Cases</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            ${item.cases}
            <br>
            <span class="recovered">Recovered</span>&nbsp;:  ${item.recovered}<br>
            <span class="death">Deaths</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            ${item.deaths}</h5>`
          )
          .addTo(this.map);
      });
    });
  }

  onMapReady(map: Map) {
    this.map = map;
  }
}
