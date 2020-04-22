import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { User } from 'src/app/models/user';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url: string = '/api/users/';
  private subject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private network: NetworkService,
    private jwtHelper: JwtHelperService,
    private htp: HttpClient
  ) {}

  login(username: string, password: string) {
    return this.network
      .get(this.url + '?username=' + username + '&password=' + password)
      .then((users: User[]) => {
        if (users.length) {
          this.setLocalStorage(users[0].token);
          this.subject.next(true);
          return Promise.resolve(users[0]);
        } else {
          return Promise.reject('username or password incorrect');
        }
      });
  }

  setLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  isAuthenticate() {
    return localStorage.getItem('token') !== null;
  }

  notify() {
    return this.subject.asObservable();
  }

  getInfoUser(): User {
    return this.jwtHelper.decodeToken(localStorage.getItem('token'));
  }

  logout() {
    localStorage.clear();
    this.subject.next(true);
  }

  getToken(user: User) {
    return this.network.post(
      'http://www.kttss.somee.com/api/Token',
      {
        fullname: user.fullname,
        username: user.username,
        password: user.password,
      },
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          accept: 'application/json',
        }),
      }
    );
  }
}
