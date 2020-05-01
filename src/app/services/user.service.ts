import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserById(id): Observable<UserModel> {
    console.log(this.httpClient.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`));
    return this.httpClient.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
