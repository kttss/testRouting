import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/models/navbar';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menu: Navbar[] = [
    { root: '/home', name: 'menu.home' },
    { root: '/articles', name: 'menu.articles' },
    { root: '/logs', name: 'menu.historique' },
    { root: '/todo', name: 'menu.todo' },
    { root: '/covid', name: 'menu.covid' },
    { root: '/map', name: 'menu.covidMap' },
  ];
  public user: User;

  langs = ['en', 'fr'];
  selectedLanguage = 'fr';
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getInfoUser();
    this.selectedLanguage = localStorage.getItem('lang') || 'fr';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./login']);
  }

  useLanguage(event): void {
    this.translateService.setDefaultLang(this.selectedLanguage);
    localStorage.setItem('lang', this.selectedLanguage);
  }
}
