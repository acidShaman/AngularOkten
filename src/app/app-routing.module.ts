import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GreetingComponent} from './components/greeting/greeting.component';

const routes: Routes = [
  // localhost:4200/
  {path: '', component: GreetingComponent},
  // localhost:4200/users
  {path: 'users', loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)},
  // localhost:4200/posts
  {path: 'posts', loadChildren: () => import('../app/modules/post/post.module').then(m => m.PostModule)},
  // // localhost:4200/comments
  // {path: 'comments', loadChildren: () => import('../app/modules/comment/comment.module').then(m => m.CommentModule)}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
