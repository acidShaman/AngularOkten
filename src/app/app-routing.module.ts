import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {UserComponent} from './components/user/user.component';
import {UserResolverService} from './services/user-resolver.service';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'user', component: UserComponent, resolve: UserResolverService}
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
