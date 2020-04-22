import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from '../../../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;

  @Output()
  forwardPostData = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(post: PostModel) {
    this.forwardPostData.emit(post);
    this.router.navigate([post.id, 'comments'],
      {
        state: {post},
        queryParams: {idOfPost: post.id},
        relativeTo: this.activatedRoute
      });
  }

}
