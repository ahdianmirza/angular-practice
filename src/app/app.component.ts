import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular 15 App';
  visible = false;
  num1 = 40;
  num2 = 5;

  mouseHoverEvent() {
    console.info("Mouse Hover");
  }
}
