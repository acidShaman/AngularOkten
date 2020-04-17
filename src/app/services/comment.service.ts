import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentModel} from '../models/CommentModel';

const API = 'https://jsonplaceholder.typicode.com/';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllComments() {
    return this.httpClient.get<CommentModel[]>(API + 'comments');
  }

  getAllCommentsByPostId(id) {
    return this.httpClient.get<CommentModel[]>(API + `comments?postId=${id}`);
  }
}
