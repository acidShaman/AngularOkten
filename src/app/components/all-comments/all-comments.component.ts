import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.comments = this.activatedRoute.snapshot.data.allPosts;
    console.log(this.comments);
  }

  ngOnInit(): void {
  }

}
