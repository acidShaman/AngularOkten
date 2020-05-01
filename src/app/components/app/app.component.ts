import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm: FormGroup;

  @Output()
  forwardUserData = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userForm = formBuilder.group(
      {
        id: ['Enter User ID Here', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]]
      }
    );
  }

  pushUser(Form) {
    console.log(Form.value);
  }

  navigate(user) {
    this.forwardUserData.emit(user);
    console.log(user.id);
    this.router.navigate(['user'],
      {
        state: {user},
        queryParams: {idOfUser: user.id},
        relativeTo: this.activatedRoute
      });
  }

}
