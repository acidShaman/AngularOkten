import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../../models/UserModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-author-of-the-comment',
  templateUrl: './author-of-the-comment.component.html',
  styleUrls: ['./author-of-the-comment.component.css']
})
export class AuthorOfTheCommentComponent implements OnInit {

  @Input()
  author: UserModel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value);
      this.author = value.author;
      console.log(this.author);
    });
  }

  ngOnInit(): void {
  }
}
