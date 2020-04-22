import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../../models/UserModel';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PostService} from '../../../post/services/post.service';

@Component({
  selector: 'app-author-of-the-comment',
  templateUrl: './author-of-the-comment.component.html',
  styleUrls: ['./author-of-the-comment.component.css']
})
export class AuthorOfTheCommentComponent implements OnInit {

  @Input()
  author: UserModel;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      // postId
      console.log(value);
      this.postService.getPostById(value.postId).subscribe(post => {
        this.userService.getUsers().subscribe(value => {
          this.author = value.find(value1 => value1.id === post.userId);
        });
      });
    });
  }

  ngOnInit(): void {
  }
}
