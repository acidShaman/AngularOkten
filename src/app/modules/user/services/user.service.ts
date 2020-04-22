import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../models/UserModel';
import {Observable} from 'rxjs';
import {PostModel} from '../../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>( 'https://jsonplaceholder.typicode.com/users');
  }
}
