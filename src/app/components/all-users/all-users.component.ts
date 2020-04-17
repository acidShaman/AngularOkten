import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];
  singleUser: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostService) {
    // get from resolver to render in AllUsersComponent
    try {
      this.users = this.activatedRoute.snapshot.data.allUsers;
    } catch (e) {
      console.log(e);
    }
    this.activatedRoute.params
      .subscribe(comment => {
        console.log(comment);
        if (!!comment.postId) {
          console.log(comment.postId);
          // this.postService.getPostById(comment.postId).subscribe(post => {
          //   console.log(post);
          // });
        }
      });
  }

  ngOnInit(): void {
  }

}
