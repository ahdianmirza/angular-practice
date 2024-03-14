import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  constructor(private router: Router) {}

  back() {
    this.router.navigate([{outlets: {stdList: null}}])
  }
}
