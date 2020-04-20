import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostsOfUserComponent } from './posts-of-user/posts-of-user.component';


@NgModule({
  declarations: [PostComponent, AllPostsComponent, PostsOfUserComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
