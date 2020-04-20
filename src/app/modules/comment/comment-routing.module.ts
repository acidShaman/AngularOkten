import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentsForPostComponent} from './comments-for-post/comments-for-post.component';
import {CommentResolverService} from './services/comment-resolver.service';


const routes: Routes = [
  // localhost:4200/posts/:postId/comments
  {path: '', component: CommentsForPostComponent, resolve: {commentsOfPost: CommentResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
