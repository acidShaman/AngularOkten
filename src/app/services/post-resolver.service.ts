import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../models/PostModel';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<PostModel[]>{

  constructor(private postsService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    const id = route.queryParamMap.get('idofUser');

    this.postsService.getPostsByUserId(+id);
    return ;
  }
}
