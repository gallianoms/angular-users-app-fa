import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

    getUsers() {
      return this.httpClient.get('/users');
    }

    getUser(user: User) {
      return this.httpClient.get('/users/' + user._id);
    }

    createUser(user: User) {
      return this.httpClient.post('/users', user);
     }

    updateUser(user: User) {
      return this.httpClient.put('/users/' + user._id, user);
    }

    deleteUser(user: User) {
      return this.httpClient.delete('/users/' + user._id);
    }

}
