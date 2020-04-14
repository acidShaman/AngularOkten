import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {UserComponent} from './components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {UserResolverService} from './services/user-resolver.service';
import {AllPostResolver} from './services/all-post-resolver';
import {CommentResolverService} from './services/comment-resolver.service';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';



const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
      {path: ':id/posts', component: AllPostsComponent, resolve: {post: AllPostResolver}}
    ]},
  // {path: 'posts', component: AllPostsComponent, resolve: {allPosts: AllPostResolver}, children: [
  //     {path: ':id/comments'}
  //   ]},
  // {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}, children: [
  //     // {path: ':id/CurrentPost', component: PostComponent, resolve:  }
  //   ]}

];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    UserComponent,
    HelloComponent,
    AllUsersComponent,
    AllCommentsComponent,
    AllPostsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
