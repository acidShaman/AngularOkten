import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {fromArray} from 'rxjs/internal/observable/fromArray';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  taskList: Task[] = [];
  toDoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.toDoForm = formBuilder.group(
      {
       id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
       title: ['Enter short info about task', Validators.required],
       type: ['How urgent is this task?', ],
       body: ['Detailed information', Validators.required]
      });
  }

  ngOnInit(): void {
  }

  pushItems(Form) {
    console.log(Form);
    this.taskList.push(Form.value);
  }
}
