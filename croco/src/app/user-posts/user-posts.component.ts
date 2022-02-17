import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  /* აქ ვინახავთ მომხმარებლის id-ს */
  private userId!: number;

  /* ამ ცვლადში ხდება მომხმარებლის პოსტის შენახვა */
  public userPosts!: Observable<any>;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private _router: Router) { }
  
  ngOnInit(): void {
    /* აქ ხდება აქტიური როუტიდან id პარამეტრის მნიშვნელობის ამოღება და მისი რიცხვად გარდაქმნა შემდეგ კი მას ვინახავთ ცვლადში */
    this.userId  = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    
    /* აქ Observable ტიპის ცვლადს ვუტოლებთ რექვესთიდან დაბრუნებულ პასუხს რომელსაც შემდგომ ასინქრონულად დავაკვირდებით თემფლეითში*/
    this.userPosts =  this.userService.getUserPostsById(this.userId)
    
  }
  onBackClick(){
    /* აქ ვახდენთ იუზერის გადამისამართებას შემდეგ როუტზე */
    this._router.navigate(['UserInfo', this.userId])
  }


}
