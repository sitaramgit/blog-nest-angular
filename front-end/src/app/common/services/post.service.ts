import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public authService:AuthService, private http: HttpClient) { 
    
  }

  createPost(payload: any){
    return this.http.post(this.authService.serverUrl+'/posts',payload);
  }
}
