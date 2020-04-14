import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/models/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menu: Navbar[] = [
    { root: '/home', name: 'Home' },
    { root: '/articles', name: 'Articles' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
