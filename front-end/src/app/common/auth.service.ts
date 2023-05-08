import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public serverUrl = 'http://localhost:3200';
  constructor(private http: HttpClient) { }

  public authenticateUser(payload: any){
    return this.http.post(this.serverUrl+'/users/login',payload);
  }
  public createUser(payload: any){
    return this.http.post(this.serverUrl+'/users',payload);
  }
}
