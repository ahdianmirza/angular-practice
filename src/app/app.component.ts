import { Component } from '@angular/core';
import { Angular15Service } from './angular15.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';
  displayMessage: string = "";
  data: any;

  constructor(private _service: Angular15Service) {}

  ngOnInit() {
    let response = this.getDataWithPromise();
    response.then(resolve => {
      console.info(resolve);
    }, reject => {
      console.info(reject);
    });

    // Observable call
    this.getDataWithObservable();
    this.data.subscribe((res: any) => {
      console.info(res);
    }, (error: any) => {
      alert(error.message);
    }, () => {
      alert("Observable completing method");
    });
  }

  public getDataWithPromise() {
    let promise = new Promise((resolve, reject) => {
      const val = 2+1;
      if (val == 4) {
        resolve("Success");
      } else {
        reject("Error");
      }
    })

    return promise;
  }

  public getDataWithObservable() {
    this.data = new Observable(res => {
      console.info("Observable is strarted");

      setTimeout(() => res.next("1"), 1000)
      setTimeout(() => res.next('2'), 2000);
      setTimeout(() => res.next('3'), 3000);
      // setTimeout(() => res.error(new Error('Error occured while fetching the data')), 3000);
      setTimeout(() => res.next('4'), 4000);
      setTimeout(() => res.next('5'), 5000);
      setTimeout(() => res.complete(), 5000);
    });
  }
}

