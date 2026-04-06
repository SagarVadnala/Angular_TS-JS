import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  httpClient = inject(HttpClient);
  currentUser: User | undefined;

  constructor(){
    this.LoadAuthUser();
  }

  validateUser(login: Login) {
    return this.httpClient.post<User | undefined>(
      `${environment.apiAddress}/Auth/ValidateUser`
      , login
      , { observe: 'response' });
  }

  SetAuthUser(user: User) {
    localStorage.setItem("auth", JSON.stringify(user));
    this.LoadAuthUser();
  }

  private LoadAuthUser() {
    const userdata = localStorage.getItem("auth");
    if (userdata !== undefined && userdata) {
      this.currentUser = JSON.parse(userdata);
    }
    else { 
      this.currentUser = undefined;
     }
  }
}
