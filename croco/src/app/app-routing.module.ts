import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'Users', component: UsersComponent},
  {path: 'UserInfo/:id', component: UserInfoComponent},
  {path: 'UserPosts/:id', component: UserPostsComponent},
  {path: '', redirectTo: 'Users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
