import { Component, OnInit } from '@angular/core';
import { Student } from '../../interface/student';
import { StudentService } from './../student.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {
  students$: Observable<{students: Student[]}>;

  constructor(
    private studentService: StudentService,
    private store: Store<{studentList:
    {students: Student[]}}>
  ) { }

  ngOnInit() {
    this.students$ = this.store.select('studentList');
    console.log(this.students$);
    this.students$.subscribe(students => {
      console.log(students);
    });
    // this.studentService.getOngkir()
    //   .subscribe(response => {
    //     console.log(response);
    //   })
  }

}
