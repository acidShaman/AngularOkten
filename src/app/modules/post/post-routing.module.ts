import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsOfUserComponent} from './posts-of-user/posts-of-user.component';
import {PostResolverService} from './services/post-resolver.service';


const routes: Routes = [
  // localhost:4200/users/:id/posts
  {path: '', component: PostsOfUserComponent, resolve: PostResolverService}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
