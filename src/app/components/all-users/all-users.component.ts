import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.users = this.activatedRoute.snapshot.data.allUsers; // записываем в локальную инфу с снэпшота
    console.log(this.users);
  }

  ngOnInit(): void {
  }

}
