import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Angular15Service {

  constructor() { }

  displayMsg(): string {
    return "Angular 15 service";
  }
}
