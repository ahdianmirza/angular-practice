import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular 15 App';
  
  studentInfo: any[] = [];

  constructor() {
    this.studentInfo = [
      {
        name: 'name 1',
        age: 20,
        dob: '12/11/2024',
      },
      {
        name: 'name 2',
        age: 21,
        dob: '09/11/2024',
      },
      {
        name: 'name 3',
        age: 22,
        dob: '01/10/2024',
      },
    ];
  }
}

