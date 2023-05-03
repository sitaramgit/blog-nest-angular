import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticateUser(payload: any){
    return this.http.post('http://localhost:3200/users/login',payload);
  }
}
