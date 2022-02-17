import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* კონსტრუქტორში შემოვიტანე HttpClient რათა გამეგზავნა რექვესთები */
  constructor(private _http: HttpClient) { 

  }

  /* getAllUsers მეთოდი გვიბრუნებს მომხმარებლების სიას. იგზავნება რექვესთი მითითებულ api-ზე end point-ით /users, და დაბრუნებულ პასუხს subscribe-მდე ვმაპავ და ისე ვაბრუნებ დამაპულ რესპონსს*/
  getAllUsers(){
    return this._http.get<any>('https://jsonplaceholder.typicode.com/users')
    .pipe(map((response: any)=>{
      return response
    }))
  }
  /* getUserById მეთოდს გადაეცემა პარამეტრი id რომელიც გვჭირდება რექვესთის გასაგზავნად end point-ზე /users/id. მეთოდი გვიბრუნებს კონკრეტული იუზერის ინფორმაციას*/
  getUserById(id: number){
    return this._http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe(map((response: any)=>{
      return response
    }))
  }
  /* getUserPostsById მეთოდი  გვიბრუნებს კონკრეტული მომხმარებლის პოსტებს userId-ის მიხედვით, ამ მეთოდს გადაეცემა პარამეტრად id რომელსაც ვიყენებთ end point-ში /comments?postId=id */
  getUserPostsById(id: number){
    return this._http.get<any>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .pipe(map((response: any)=>{
      return response
    }))
  }
}
