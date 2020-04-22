import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentsForPostComponent} from './components/comments-for-post/comments-for-post.component';
import {CommentResolverService} from './services/comment-resolver.service';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';


const routes: Routes = [
  // localhost:4200/posts/:postId/comments
  {path: '', component: CommentsForPostComponent, resolve: {commentsOfPost: CommentResolverService}},
  // localhost:4200/comments
  {path: '', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}, children: [
      {path: ':id/author', loadChildren: () => import('../user/user.module').then(m => m.UserModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
