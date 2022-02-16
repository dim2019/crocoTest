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

  private userId!: number;
  public userPosts!: Observable<any>;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private _router: Router) { }
  
  ngOnInit(): void {
    this.userId  = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    this.userPosts =  this.userService.getUserPostsById(this.userId)
    
  }
  onBackClick(){
    this._router.navigate(['UserInfo', this.userId])
  }


}
