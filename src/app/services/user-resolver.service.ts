import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {UserModel} from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserModel>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> | Promise<UserModel> | UserModel {
    const id = route.queryParamMap.get('idOfUser');
    return this.userService.getUserById(id);
  }
}
