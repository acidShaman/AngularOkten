import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {UserModel} from '../models/UserModel';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService  implements CanActivate{


  constructor(private userService: UserService, private dataService: DataService) {
  }
  // tslint:disable-next-line:max-line-length
   async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
    const id = +route.queryParamMap.get('idOfUser');
    const user = await this.userService.getUserById(id).toPromise();
    if (Object.keys(user).length) {
      console.log('User exists');
      this.dataService.addToDB(user);
      return Promise.resolve(true);
    } else {
      console.log('User doesn\'t exist');
      return Promise.resolve(false);
    }
  }
}
