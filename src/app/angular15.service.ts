import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Angular15Service {

  constructor(private _http: HttpClient) { }

  displayMsg(): string {
    return "Angular 15 service";
  }

  getStudentDetails() {
    return this._http.get('../assets/StudentRecords.json');
  }
}
