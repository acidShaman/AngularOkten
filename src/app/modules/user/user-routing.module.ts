import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './all-users/all-users.component';
import {AllUsersResolverService} from './user/all-users-resolver.service';


const routes: Routes = [
  {
    // localhost:4200/users
    path: '',
    component: AllUsersComponent,
    resolve: {allUsers: AllUsersResolverService},
    children: [
      // localhost:4200/users/
      {path: '', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
    ]
  },
  {
    // /comments/:id/author
    path: ':id/author',
    component: AllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
