import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService  implements CanActivate{
  constructor(private userService: UserService) {
  }
  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = route.queryParamMap.get('idOfUser');

    this.userService.getUsers().subscribe(allUsers => {
      if (!allUsers.find(user => user.id == id)) {
        console.log('User doesn\'t exist');
        return false;
      } else {
        console.log('you may see your user');
        return true;
      }
    });
  }
}
