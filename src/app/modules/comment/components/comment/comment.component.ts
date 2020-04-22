import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentModel} from '../../../../models/CommentModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostModel} from '../../../../models/PostModel';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentModel;

  @Output()
  forwardCommentData = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigate(comment: CommentModel) {
    this.forwardCommentData.emit(comment);
    this.router.navigate([comment.id, 'author'],
      {
        state: {comment},
        queryParams: {postId: comment.postId},
        relativeTo: this.activatedRoute
      });
  }
}
