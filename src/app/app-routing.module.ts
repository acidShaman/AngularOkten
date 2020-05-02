import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UserResolverService} from './services/user-resolver.service';
import {InputComponent} from './components/input/input.component';
import {CanActivateService} from './services/can-activate.service';


const routes: Routes = [
  {path: '', component: InputComponent},
  {path: 'user', component: UserComponent, resolve: {user: UserResolverService}, canActivate: [CanActivateService]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
