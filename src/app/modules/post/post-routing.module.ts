import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {AllPostsResolverService} from './services/all-posts-resolver.service';


const routes: Routes = [
  {
    // posts
    path: '',
    component: AllPostsComponent,
    resolve: {allPosts: AllPostsResolverService},
    children: [
      {path: '', loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule)}
    ]
  },
  {
    //  /users/id/posts
    path: ':id/posts',
    component: AllPostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
