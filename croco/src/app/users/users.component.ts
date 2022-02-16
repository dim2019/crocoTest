import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  /* შეიქმნა  public ცვლადი რომელიც არის Observable ტიპის რათა შემდეგ მასზე მოხდეს ასინქრონულად ციკლში გადავლა*/
  public users!: Observable<any>

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    /* აქ ვიძახებ სერვისიდან მეთოდს getAllUsers-ს რათა წამოვიღო api-ის დაბრუნებული შესაბამისი პასუხი და ვახდენ Observable ტიპის ცვლადზე გატოლებას*/
    this.users = this.userService.getAllUsers()
  }
  redirecting(userId: number){
    this._router.navigate(['UserInfo', userId])
    
  }

}
