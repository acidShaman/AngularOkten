import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {CommentModel} from '../models/CommentModel';

const API = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<User[]>(API + 'users');
  }

  getUserByCommentId(id) {
      return this.httpClient.get<User>(API + `users?id=${id}`);
    }
}
