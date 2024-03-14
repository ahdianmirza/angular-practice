import { Component } from '@angular/core';
import { Angular15Service } from './angular15.service';
import { Observable, from, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';
  displayMessage: string = "";
  data: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(section => {
      this.goToSection(section);
    })
  }

  public getDataWithPromise() {
    let promise = new Promise((resolve, reject) => {
      const val = 2+2;
      if (val == 4) {
        resolve("Success");
      } else {
        reject("Error");
      }
    })

    return promise;
  }

  goToSection(section: any = "") {
    document.getElementById(section)!.scrollIntoView({behavior: 'smooth'});
  }
}

