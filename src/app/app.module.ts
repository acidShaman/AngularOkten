import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { UserComponent } from './components/single/user/user.component';
import { PostComponent } from './components/single/post/post.component';
import { CommentComponent } from './components/single/comment/comment.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
import {AllUsersResolverService} from './services/resolvers/all-users-resolver.service';
import {AllPostsResolverService} from './services/resolvers/all-posts-resolver.service';
import {AllCommentsResolverService} from './services/resolvers/all-comments-resolver.service';

const routes: Routes = [
  {path: '', component: GreetingComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: AllUsersResolverService}, children: [
      {path: ':id/posts', component: AllPostsComponent}
    ]},
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: AllPostsResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent}
    ]},
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: AllCommentsResolverService}, children: [
      {path: ':id/author', component: AllUsersComponent}
    ]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AllCommentsComponent,
    AllUsersComponent,
    AllPostsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

