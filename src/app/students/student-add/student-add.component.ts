import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Student } from '../../interface/student';
import * as StudentAction from './../../store/actions/student.action';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;
  constructor(
    private store: Store<{studentList:
      {students: Student[]}}>
  ) { }

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
    // tslint:disable-next-line:no-unused-expression
    const newStudent = new Student(this.studentForm.value.nisn, this.studentForm.value.name, this.studentForm.value.study);
    console.log(newStudent);
    // TODO: Use EventEmitter with form value
    console.log(this.studentForm);
    this.store.dispatch(new StudentAction.AddStudent(newStudent));
  }

}
