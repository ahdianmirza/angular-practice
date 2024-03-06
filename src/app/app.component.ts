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
        age: 14,
        gender: 'Male',
      },
      {
        name: 'name 2',
        age: 16,
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
        age: 14,
        gender: 'Male',
      },
      {
        name: 'name 2',
        age: 16,
        gender: 'Female',
      },
      {
        name: 'name 3',
        age: 20,
        gender: 'Female',
      },
      {
        name: 'name 4',
        age: 18,
        gender: 'Female',
      },
      {
        name: 'name 5',
        age: 11,
        gender: 'Female',
      },
      {
        name: 'name 6',
        age: 22,
        gender: 'Female',
      },
    ];
  }

  trackByStudentName(index: number, student: any): string {
    return student.name;
  }

  getAge(age: number) {
    let val = age < 18 ? 'Under18' : 'Above18';

    switch(val) {
      case 'Under18':
        return 'green';
      case 'Above18':
        return 'red'
    }
    return "";
  }

  getCssClass(input: string) {
    let classType;
    if (input == "main") {
      classType = {
        color1: true
      }
    } else {
      classType = {
        color2: true
      }
    }
    return classType;
  }
}

