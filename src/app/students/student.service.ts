import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { Student } from '../interface/student';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

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

  getOngkir() {
    const data = {
      key: 'cb5107e448d1c4f1b73d57305e1cea18',
      origin: '501',
      originType: 'city',
      destination: '574',
      destinationType: 'subdistrict',
      weight: '1700',
      courier: 'tiki'
    };
    // const headers = new HttpHeaders().set('key', 'cb5107e448d1c4f1b73d57305e1cea18').append('Content-Type', 'application/json');
    return this.httpClient.post('https://pro.rajaongkir.com/api/cost', data)
    .pipe(map(response => response));
  }
}
