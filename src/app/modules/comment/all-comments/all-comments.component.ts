import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  commentList: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    // get from resolver to render in AllCommentsComponent
    try {
      this.commentList = this.activatedRoute.snapshot.data.allComments;
    } catch (e) {
      console.log(e);
    }
    // get comments for one exact post
    this.activatedRoute.params
      .subscribe(value => {
        if (!!value.id) {
          this.commentService.getAllCommentsByPostId(value.id).subscribe(comments => {
            this.commentList = comments;
          });
        }
      });
  }

  ngOnInit(): void {
  }

}
