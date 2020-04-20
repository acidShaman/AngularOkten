import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsOfUserComponent} from './posts-of-user/posts-of-user.component';
import {PostResolverService} from './services/post-resolver.service';
import {AllPostsComponent} from './all-posts/all-posts.component';


const routes: Routes = [
  // localhost:4200/users/:id/posts
  {path: '', component: PostsOfUserComponent, resolve: {postsOfUser: PostResolverService}},
  // localhost:4200/posts/all-posts
  {path: '', component: AllPostsComponent, resolve: {AllPosts: PostResolverService}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
