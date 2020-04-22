import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  icon,
  latLng,
  marker,
  polyline,
  tileLayer,
  Map,
  LatLng,
} from 'leaflet';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public userForm: FormGroup;
  public options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909),
  };
  public layers = [];
  public map: Map = null;
  constructor(
    private fbuild: FormBuilder,
    private authService: AuthenticationService
  ) {}

  getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };

  ngOnInit(): void {
    const user = this.authService.getInfoUser();
    this.userForm = this.fbuild.group({
      fullname: this.fbuild.control(user.fullname, [Validators.required]),
      username: this.fbuild.control(user.username, [Validators.required]),
      password: this.fbuild.control(user.password, [Validators.required]),
      passwordConfirm: this.fbuild.control(user.password, [
        Validators.required,
      ]),
    });
    this.getPosition().then((data: any) => {
      this.layers = [marker([data.latitude, data.longitude])];
      this.map.panTo(new LatLng(data.latitude, data.longitude));
    });
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  clickMap(event) {
    console.log(event);
    this.options.center = latLng(event.latlng.lat, event.latlng.lng);
    this.layers = [marker([event.latlng.lat, event.latlng.lng])];
  }

  checkInValid(control: FormControl): boolean {
    return control?.invalid && (control?.touched || control?.dirty);
  }

  onSubmit() {}
}
