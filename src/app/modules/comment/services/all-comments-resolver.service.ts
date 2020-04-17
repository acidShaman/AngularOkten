import { Injectable } from '@angular/core';
import {CommentService} from './comment.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../../../models/CommentModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCommentsResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) { }

  // tslint:disable-next-line:max-line-length
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    return this.commentService.getAllComments();
  }
}
