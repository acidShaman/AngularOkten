import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './all-users/all-users.component';
import {UserComponent} from './user/user.component';
import {AuthorOfTheCommentComponent} from './author-of-the-comment/author-of-the-comment.component';
import {UserResolveService} from './services/user-resolve.service';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  // localhost:4200/users
  {path: '', component: AllUsersComponent, resolve: {allUsers: UserResolveService}, children: [
    // localhost:4200/users/:id
      {path: ':id', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
    ]}
];

@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent,
    AuthorOfTheCommentComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
