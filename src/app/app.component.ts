import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular 15 App';
  StudentDetails: any[] = [];

  constructor() {
    this.StudentDetails = [
      {
        name: 'name 1',
        age: 21,
        gender: 'Male',
      },
      {
        name: 'name 2',
        age: 22,
        gender: 'Female',
      },
      {
        name: 'name 3',
        age: 23,
        gender: 'Female',
      },
      {
        name: 'name 4',
        age: 24,
        gender: 'Female',
      },
    ];
  }

  getMoreStudentData(): void {
    this.StudentDetails = [
      {
        name: 'name 1',
        age: 21,
        gender: 'Male',
      },
      {
        name: 'name 2',
        age: 22,
        gender: 'Female',
      },
      {
        name: 'name 3',
        age: 23,
        gender: 'Female',
      },
      {
        name: 'name 4',
        age: 24,
        gender: 'Female',
      },
      {
        name: 'name 5',
        age: 25,
        gender: 'Female',
      },
      {
        name: 'name 6',
        age: 26,
        gender: 'Female',
      },
    ];
  }

  trackByStudentName(index: number, student: any): string {
    return student.name;
  }
}
