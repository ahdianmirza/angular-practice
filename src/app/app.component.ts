import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';

  dob = new Date('01/05/1990');

  salary = 1000000;

  constructor() {}
}

