import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from './post.service';
import {PostModel} from '../../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<PostModel[]>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    const id = route.queryParamMap.get('idOfUser');
    console.log(id, '!!!');
    if (id) {
      return this.postService.getPostsByUserId(id);
    } else {
      return this.postService.getPosts();
    }
  }
}
