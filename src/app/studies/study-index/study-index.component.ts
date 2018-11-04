import { Component, OnInit } from '@angular/core';
import { StudyService } from './../study.service';

@Component({
  selector: 'app-study-index',
  templateUrl: './study-index.component.html',
  styleUrls: ['./study-index.component.scss']
})
export class StudyIndexComponent implements OnInit {
  status = true;
  constructor(
    private studyService: StudyService
  ) { }

  ngOnInit() {
    const data = this.studyService.test();
    console.log(data)
  }

}
