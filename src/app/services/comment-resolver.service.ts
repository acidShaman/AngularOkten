import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentModel} from '../models/CommentModel';
import {CommentService} from './comment.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]> {

  constructor(private commentsService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]>{
    return this.commentsService.getComments();
  }
}
