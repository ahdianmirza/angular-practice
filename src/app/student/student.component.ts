import { Component } from '@angular/core';
import { Angular15Service } from '../angular15.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentInfo: any = [];

  constructor(private _service: Angular15Service) {}

  ngOnInit() {
    this._service.getStudentDetails().subscribe(details => {
      this.studentInfo = details;
    })
  }
}
