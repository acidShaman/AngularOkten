import { Component } from '@angular/core';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {UserModel} from '../../models/UserModel';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserModel[] = [];

  constructor(private postsService: PostService,
              private commentsService: CommentService,
              private userService: UserService) {
    this.userService.getUsers().subscribe(users => {
      this.postsService.getPosts().subscribe(posts => {
        this.commentsService.getComments().subscribe(comments => {
          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (post.userId === user.id) {
                user.posts.push(post);
                post.comments = [];
                for (const comment of comments) {
                  if (comment.postId === post.id) {
                    post.comments.push(comment);
                  }
                }
              }
            }
            this.users.push(user);
          }
          console.log(this.users);
        });
      });
    });
  }
}
