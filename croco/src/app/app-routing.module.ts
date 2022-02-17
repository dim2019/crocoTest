import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  /* ესაა როუტები რომლის მიხედვითაც იმოძრავებს მომხმარებელი გვერდიდან გვერდზე*/
  {path: 'Users', component: UsersComponent},
  
  /* აქ როუტს დინამიურად გადაეცემა პარამეტრი id */
  {path: 'UserInfo/:id', component: UserInfoComponent},

  /* აქ როუტს დინამიურად გადაეცემა პარამეტრი id */
  {path: 'UserPosts/:id', component: UserPostsComponent},

  /* ეს როუტი არის ცარიელი urlისთვის როდესაც არანაირი პარამეტრი არ გადაეცემა როუტს, მაგალითად ჩვენ მივმართავთ http://localhost:4200/ პორტს. */
  {path: '', redirectTo: 'Users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
