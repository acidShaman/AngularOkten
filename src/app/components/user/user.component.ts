import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user?: UserModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data.user;
  }

  ngOnInit(): void {
  }

}
