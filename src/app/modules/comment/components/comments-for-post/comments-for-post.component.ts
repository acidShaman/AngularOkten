import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../../../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments-for-post',
  templateUrl: './comments-for-post.component.html',
  styleUrls: ['./comments-for-post.component.css']
})
export class CommentsForPostComponent implements OnInit {

  commentsOfPost: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.commentsOfPost = value.commentsOfPost;
    });
  }

  ngOnInit(): void {
  }

}
