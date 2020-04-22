import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../../../models/UserModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;

  @Output()
  forwardUserData = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(user: UserModel) {
    this.forwardUserData.emit(user);

    this.router.navigate([user.id, 'posts'],
      {
        state: {user},
        queryParams: {idOfUser: user.id},
        relativeTo: this.activatedRoute
      });
  }

}
