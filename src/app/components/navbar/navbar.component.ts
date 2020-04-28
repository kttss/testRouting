import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/models/navbar';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menu: Navbar[] = [
    { root: '/home', name: 'Home' },
    { root: '/articles', name: 'Articles' },
    { root: '/logs', name: 'Historique' },
    { root: '/todo', name: 'ToDo' },
    { root: '/covid', name: 'Covid-19' },
  ];
  public user: User;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getInfoUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./login']);
  }
}
