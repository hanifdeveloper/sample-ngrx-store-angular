import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Student } from '../../interface/student';
import { Store } from '@ngrx/store';
import * as StudentAction from './../../store/actions/student.action';

@Component({
  selector: 'app-dinamis-add',
  templateUrl: './dinamis-add.component.html',
  styleUrls: ['./dinamis-add.component.scss']
})
export class DinamisAddComponent implements OnInit {
  students: FormArray;
  studentForm: FormGroup;
  studentArray: Student[] = [];

  constructor(
    private store: Store<{studentList:
      {students: Student[]}}>
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {

    this.studentForm = new FormGroup({
      'students': new FormArray([this.buildFormStudent()])
    });
  }

  buildFormStudent(): FormGroup {
    const studentForm = new FormGroup({
      nisn: new FormControl(''),
      name: new FormControl(''),
      study: new FormControl('')
    });
    return studentForm;
  }

  onAddStudent(): void {
    this.students = this.studentForm.get('students') as FormArray;
    this.students.push(this.buildFormStudent());
    console.log(this.students);
  }

  onSubmit() {
    for (const student of this.studentForm.value.students) {
     const { nisn, name, study } = student;
      this.studentArray.push(new Student(nisn, name, study));
    }
    this.store.dispatch(new StudentAction.AddStudents(this.studentArray));
    // tslint:disable-next-line:no-unused-expression
    console.log(this.studentForm.value.students);
  }
}
