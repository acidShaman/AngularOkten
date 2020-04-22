import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentModel} from '../../../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getComments() {
    return this.httpClient.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentsByPostId(id) {
    return this.httpClient.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
