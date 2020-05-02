import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {UserService} from './user.service';
import {UserModel} from '../models/UserModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Observable<UserModel>>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    const id = route.queryParamMap.get('idOfUser');
    return this.userService.getUserById(id);
  }
}
