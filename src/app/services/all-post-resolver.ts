import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../models/PostModel';
import {PostService} from './post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPostResolver implements Resolve<PostModel[]>{

  constructor(private postsService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> {
    return this.postsService.getPosts();
  }
}
