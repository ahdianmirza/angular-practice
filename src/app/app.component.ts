import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';

  constructor(private router: Router) {}

  dynamicRouter(linkName: string) {
    if (linkName == 'student') {
      this.router.navigate(['/student']);
    } else {
      this.router.navigate(['/teacher']);
    }
  }
}

