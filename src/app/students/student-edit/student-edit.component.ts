import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../interface/student';
import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import * as StudentAction from './../../store/actions/student.action';
import { AppState } from '../../store/reducer/student.reducer';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  studentId: string;
  students$: Observable<AppState>;
  students: Student[];
  studentForm: FormGroup;
  student: Student;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.studentId = this.activatedRoute.snapshot.params['id'];
    this.students$ = this.store.select('studentList');
    this.students$
      .pipe(
        map(studentList => studentList.students))
      .subscribe(students => {
        this.students = students;
        this.student = this.students[this.studentId];
        this.buildForm();
      }, err => console.log(err));

  }

  buildForm() {
    this.studentForm = new FormGroup({

      nisn: new FormControl(this.student.nisn),
      name: new FormControl(this.student.name),
      study: new FormControl(this.student.study)
    });
  }

  onSubmit() {
    // tslint:disable-next-line:no-unused-expression
    const newStudent = new Student(this.studentForm.value.nisn, this.studentForm.value.name, this.studentForm.value.study);
    this.store.dispatch(new StudentAction.UpdateStudent(
      { index: parseInt(this.studentId, 10), student: newStudent}
    ));
  }

}
