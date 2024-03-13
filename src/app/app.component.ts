import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular15Service } from './angular15.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';
  displayMessage: string = "";

  constructor(private router: Router, private _service: Angular15Service) {}

  ngOnInit() {
    this.displayMessage = this._service.displayMsg();
  }

  dynamicRouter(linkName: string) {
    if (linkName == 'student') {
      this.router.navigate(['/student']);
    } else {
      this.router.navigate(['/teacher']);
    }
  }
}

