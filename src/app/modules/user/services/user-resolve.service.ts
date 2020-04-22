import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserModel} from '../../../models/UserModel';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {PostModel} from '../../../models/PostModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<UserModel[]>{

  post: PostModel[];

  constructor(private userService: UserService, private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {
    const id = route.queryParamMap.get('postId');
    if (!!id) {
      const post = this.httpClient.get<PostModel>(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log(post, '!!!');
      // this.userService.getUsers().subscribe(value => {
      //  });
    } else {
      return this.userService.getUsers();
    }

  }
}
