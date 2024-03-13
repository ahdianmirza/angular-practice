import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular 15 App';
  sum: number = 0;
  
  showAlert() {
    alert("Hello");
  }

  showSum() {
    this.sum = 10+20;
  }

  setColor(color: any) {
    alert(color.target.value)
  }
}

