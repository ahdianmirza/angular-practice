import { Component } from '@angular/core';
import { Angular15Service } from './angular15.service';
import { Observable, from, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular 15 app';
  data: any;
  username: SafeHtml = "";

  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const input = `<script>alert("Hello")</script>`;
    this.username = this.sanitizer.bypassSecurityTrustHtml(input);
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
}

