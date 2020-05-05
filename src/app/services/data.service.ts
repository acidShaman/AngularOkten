import {Injectable, OnChanges, SimpleChanges} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  state = new BehaviorSubject(null);

  constructor() {
  }


  addToDB(user) {
    this.state.next(user);
    console.log(JSON.stringify(this.state.value));
    localStorage.setItem(`user #${this.state.value.id}`, JSON.stringify(this.state.value));
  }
}
