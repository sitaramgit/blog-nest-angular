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
  public storeTheTokenAndUserDetails(date: any){
    localStorage.setItem('user_details', JSON.stringify(date.userData));
    localStorage.setItem('jwt_token', date.token);
  }

  public getUserDetailsFromLocal(){
    try {
      const userDetails: any = localStorage.getItem('user_details');
      return JSON.parse(userDetails);
    } catch (error) {
      throw new Error("user details not found");
    }
  }
  public getJwtTokenFromLocal(){
    try {
      const token: any = localStorage.getItem('jwt_token');
      return token;
    } catch (error) {
      throw new Error("token not found");
       
    }
  }
}
