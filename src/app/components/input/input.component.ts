import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  userForm: FormGroup;

  @Output()
  forwardUserData = new EventEmitter();

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.userForm = formBuilder.group(
      {
        id: ['Enter User ID Here', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]]
      }
    );
  }

  navigate(Form) {
    this.forwardUserData.emit(Form);
    console.log(Form.value.id);
    this.router.navigate(['/user'],
      {
        queryParams: {
          idOfUser: Form.value.id
        },
        relativeTo: this.activatedRoute
      });
  }

  ngOnInit(): void {
  }

}
