import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserComponent} from './components/user/user.component';
import {AuthorOfTheCommentComponent} from './components/author-of-the-comment/author-of-the-comment.component';
import {UserResolveService} from './services/user-resolve.service';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  // localhost:4200/all-users
  {path: '', component: AllUsersComponent, resolve: {allUsers: UserResolveService}, children: [
    // localhost:4200/all-users/:id/posts
      {path: ':id/posts', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
    ]},
  // localhost:4200/comments/:id/author
  {path: '', component: AuthorOfTheCommentComponent, resolve: {author: UserResolveService}}
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
