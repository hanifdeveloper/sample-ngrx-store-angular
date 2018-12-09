import { Component, OnInit } from '@angular/core';
import { Student } from '../../interface/student';
import { StudentService } from './../student.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as StudentAction from './../../store/actions/student.action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {
  students$: Observable<{students: Student[]}>;
  students: Student[];
  studentAdd$: Observable<any>;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private store: Store<{studentList:
    {students: Student[]}}>
  ) { }

  ngOnInit() {
    this.students$ = this.store.select('studentList');
    this.studentAdd$ = this.studentService.userData;
    console.log('helo there ')
    this.studentAdd$.subscribe(student => {
      console.log('here i am')
      console.log('student add ', student);
    })

    this.students$
      .pipe( map(studentList => studentList.students))
      .subscribe(students => {
        this.students = students;
        console.log('from ngrx store', this.students);
      }, err => console.log(err));

  }

  destroy(index) {
    this.store.dispatch(new StudentAction.DeleteStudent(index));

  }

  edit(index) {
    this.router.navigate(['/student/edit', index]);
  }

}
