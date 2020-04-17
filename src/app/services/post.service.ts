import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/Post';

const API = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    return this.httpClient.get<Post[]>(API + 'posts');
  }

  getPostsByUserId(id) {
    return this.httpClient.get<Post[]>(API + `posts?userId=${id}`);
  }

  getPostById(id) {
    return this.httpClient.get<Post>(API + `posts/${id}`);
  }
}
