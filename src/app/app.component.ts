import { Component } from '@angular/core';
import { Angular15Service } from './angular15.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';
  displayMessage: string = "";

  constructor(private _service: Angular15Service) {}

  ngOnInit() {
    this.displayMessage = this._service.displayMsg();
  }
}

