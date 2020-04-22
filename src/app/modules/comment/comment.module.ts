import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './components/comment/comment.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentsForPostComponent } from './components/comments-for-post/comments-for-post.component';
import {PostModule} from '../post/post.module';


@NgModule({
  declarations: [CommentComponent, AllCommentsComponent, CommentsForPostComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    PostModule
  ]
})
export class CommentModule { }
