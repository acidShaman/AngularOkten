import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models/Post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    // get from resolver to render in AllPostsComponent
    try {
      this.posts = this.activatedRoute.snapshot.data.allPosts;
    } catch (e) {
      console.log(e);
    }
    // get posts for one exact user
    this.activatedRoute.params
    .subscribe(value => {
    if (!!value.id) {
    this.postService.getPostsByUserId(value.id).subscribe(posts => {
      this.posts = posts;
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
