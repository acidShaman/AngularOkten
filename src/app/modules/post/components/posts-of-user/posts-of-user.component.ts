import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent implements OnInit {

  postsOfUser: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.postsOfUser = value.postsOfUser;
      console.log(this.postsOfUser);
    });
  }

  ngOnInit(): void {
  }
}
