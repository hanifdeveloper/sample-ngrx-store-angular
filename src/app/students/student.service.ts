import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { Student } from '../interface/student';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  userData = new Subject();
  constructor(
    private httpClient: HttpClient,
    private http: Http
  ) { }


  getStudent() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token).append('Content-Type', 'application/json');
    return this.httpClient.get<any>('http://localhost:3333/api/v1/students', {
      responseType: 'json',
      headers: headers
    })
    .pipe(map(response => {
      return response;
    }));
  }

}
