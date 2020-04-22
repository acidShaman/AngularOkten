import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../../../models/CommentModel';
import {Observable} from 'rxjs';
import {CommentService} from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) { }

  // tslint:disable-next-line:max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    const id = route.queryParamMap.get('idOfPost');
    if (!!id) {
      return this.commentService.getCommentsByPostId(id);
    } else {
      return this.commentService.getComments();
    }
  }
}
