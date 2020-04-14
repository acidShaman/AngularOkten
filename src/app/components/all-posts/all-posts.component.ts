import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostService,
              private router: Router
  ) {
    this.activatedRoute
      .params
      .subscribe(params =>
      this.postsService
        .getPostsByUserId(params.id)
        .subscribe(postsFromServer => this.posts = postsFromServer));
  }

  ngOnInit(): void {
  }

}
