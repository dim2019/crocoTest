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


  /* ამ ცვლადში ვინახავთ მომხმარებლის ინფრმაციას რომელიც არის userInfo ტიპის, ეს ტიპი აღწერილია ინტერფეისში რომელიც ცალკე ფაილშია გატანილი*/
  public userInfo!: userInfo;

  /* ამ ცვლადში ინახება მომხმარებლის id*/
  public userId!: number;

  /* ეს არის subscription ტიპის ცვლადი რათა როუტის შეცვლის ან აპლიკაციის დახურვის შემდეგ  როდესაც OnDestroy გაეშვება მოვახდინოთ unsubscribe*/
  private subscription!: Subscription

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    /* აქ ხდება აქტიური როუტიდან id პარამეტრის მნიშვნელობის ამოღება და მისი რიცხვად გარდაქმნა შემდეგ კი მას ვინახავთ ცვლადში  */
    this.userId  = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    /* აქ ვახდენთ სერვისში გატანილი მეთოდის გამოძახებას რომელსაც გადავცემთ id-ს და ვაკეთებთ subscribe-ს შემდეგ დაბრუნებულ პასუხს ვუტოლებთ userInfo-ს ხოლო მთლოანად ამ ოპერაციას ვუტოლებთ subscription ტიპის ცვლადს*/
    this.subscription = this.userService.getUserById(this.userId).subscribe(res=>{
      this.userInfo = res
    })    
  }
  onPostsClick(){
    /* ამ მეთოდზე დაკლიკებით ვცვლით როუტს*/
    this.router.navigate(['UserPosts', this.userId])
  }
  onUsersClick(){
    /*  ამ მეთოდზე დაკლიკებით ვცვლით როუტს */
    this.router.navigate(['Users'])
  }
  ngOnDestroy(): void {
    /* აქ ვახდენთ unsubscribe-ს, ეს მეთოდი გაეშვება მაშინ როცა როუტი შეიცვლება ან დაიხურება*/
    this.subscription.unsubscribe()
  }

}
