import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { 

  }

  getAllUsers(){
    return this._http.get<any>('https://jsonplaceholder.typicode.com/users')
    .pipe(map((response: any)=>{
      return response
    }))
  }
  getUserById(id: number){
    return this._http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe(map((response: any)=>{
      return response
    }))
  }
  getUserPostsById(id: number){
    return this._http.get<any>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .pipe(map((response: any)=>{
      return response
    }))
  }
}
