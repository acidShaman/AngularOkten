import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(user: User) {
    this.router.navigate([user.id, 'posts'], {relativeTo: this.activatedRoute});
  }
}
