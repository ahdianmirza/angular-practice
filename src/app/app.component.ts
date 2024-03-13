import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';
  numberArray: any[] = [];

  constructor() {
    this.numberArray = [
      {
        num1: 5,
        num2: 10,
      },
      {
        num1: 10,
        num2: 20,
      },
      {
        num1: 15,
        num2: 17,
      },
    ];
  }
}

