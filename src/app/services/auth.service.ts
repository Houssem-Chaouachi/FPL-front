import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token = localStorage.getItem('token');
isLogin = new BehaviorSubject<boolean>(this.UserHastoken());
  constructor(private webreq: WebRequestService) { }
   UserHastoken(): boolean {
    return !!localStorage.getItem('token');
  }
  public UserIsAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return true;
  }

  register(payload:string){
   return this.webreq.post('user/register',payload)
  }

  login(payload:string){
    return this.webreq.post('user/login',payload)
  }

  getToken(){
    return this.token
  }

  logout() {
    this.isLogin.next(false);
  }
}
