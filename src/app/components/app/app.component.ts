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

  navigate(Form) {
    this.forwardUserData.emit(Form);
    console.log(Form.value.id);
    this.router.navigate(['/user'],
      {
        queryParams: {idOfUser: Form.value.id},
        relativeTo: this.activatedRoute
      });
  }

}
