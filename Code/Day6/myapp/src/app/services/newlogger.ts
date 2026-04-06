import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Newlogger {
  private name: string = "";

  constructor() {
    console.log('New Logger Object created');
  }

  setName(nm: string) {
    this.name = nm;
    console.log(`New Name is set`);
  }

  getName() {
    console.log(`New Name=${this.name}`);
  }
}
