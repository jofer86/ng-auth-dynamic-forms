import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  login(email:string, password:string ) {
    let options = {
      user: { email, password }
    }
    this.http.post<any>('http://localhost:4000/login', options, {observe: 'response' as 'body'}).subscribe(this.setSession)
  }

  getToken(): string | null  {
    return localStorage.getItem('token');
  }

  setSession(authResult: any) {
    let token = authResult.headers.get('Authorization');

    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem("token");
  }

  getExpiration() {
    const expiration: any  = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return new Date(expiresAt)
  } 
}
