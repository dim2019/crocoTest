import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { userInfo } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit,OnDestroy {

  public userInfo!: userInfo;
  public userId!: number;

  private subscription!: Subscription

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.userId  = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    this.subscription = this.userService.getUserById(this.userId).subscribe(res=>{
      this.userInfo = res
    })    
  }
  onPostsClick(){
    this.router.navigate(['UserPosts', this.userId])
  }
  onUsersClick(){
    this.router.navigate(['Users'])
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
