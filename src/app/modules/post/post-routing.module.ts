import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsOfUserComponent} from './components/posts-of-user/posts-of-user.component';
import {PostResolverService} from './services/post-resolver.service';
import {AllPostsComponent} from './components/all-posts/all-posts.component';


const routes: Routes = [
  // localhost:4200/users/:id/posts
  {path: '', component: PostsOfUserComponent, resolve: {postsOfUser: PostResolverService}},
  // localhost:4200/all-posts
  {path: '', component: AllPostsComponent, resolve: {AllPosts: PostResolverService}, children: [
      {path: ':id/comments', loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule)}
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
