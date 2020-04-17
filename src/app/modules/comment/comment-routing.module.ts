import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from './all-comments/all-comments.component';


const routes: Routes = [
  {
    path: '',
    component: AllCommentsComponent,
    resolve: {allComments: AllCommentsComponent},
    children: [
      {path: '', loadChildren: () => import('../user/user.module').then(m => m.UserModule)}
    ]
  },
  {
    path: ':id/comments',
    component: AllCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
