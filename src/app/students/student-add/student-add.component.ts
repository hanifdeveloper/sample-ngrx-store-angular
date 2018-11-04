import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.studentForm = new FormGroup({
      nisn: new FormControl(''),
      name: new FormControl(''),
      study: new FormControl('')
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.studentForm);
  }

}
