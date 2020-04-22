import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../../../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.comments = this.activatedRoute.snapshot.data.allComments;
  }

  ngOnInit(): void {
  }

}
