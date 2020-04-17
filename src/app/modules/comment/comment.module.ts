import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import {AllCommentsComponent} from './all-comments/all-comments.component';
import {CommentComponent} from './comment/comment.component';


@NgModule({
  declarations: [
    AllCommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
