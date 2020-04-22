import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { NetworkService } from '../network/network.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlUsers = '/api/users/';
  constructor(private network: NetworkService) {}

  addUser(user: User) {
    return this.network.post(this.urlUsers, user);
  }
}
