import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment/comment.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { CommentsForPostComponent } from './comments-for-post/comments-for-post.component';


@NgModule({
  declarations: [CommentComponent, AllCommentsComponent, CommentsForPostComponent],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
