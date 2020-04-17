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
  singleUser: User = null;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostService) {
    // get from resolver to render in AllUsersComponent
    try {
      this.users = this.activatedRoute.snapshot.data.allUsers;
    } catch (e) {
      console.log(e);
    }
    this.activatedRoute.params
      .subscribe(postId => {
        console.log(postId.id);
        if (!!postId.id) {
          this.postService.getPostById(postId.id).subscribe(post => {
            this.userService.getAllUsers().subscribe( value => {
              this.singleUser = value.find(value1 => value1.id === post.userId);
              console.log(value.find(value1 => value1.id === post.userId));
            });
          });
        }
      });
  }

  ngOnInit(): void {
  }

}
