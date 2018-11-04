import { Component, OnInit } from '@angular/core';
import { Student } from '../../interface/student';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {
  students: Student[];

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentService.getStudent()
      .subscribe(students => {
        this.students = students;
        console.log(this.students);
      });
  }

}
