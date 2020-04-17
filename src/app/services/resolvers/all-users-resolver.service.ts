import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllUsersResolverService implements Resolve<User[]>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    console.log('resolving all users');
    return this.userService.getAllUsers();
  }
}
