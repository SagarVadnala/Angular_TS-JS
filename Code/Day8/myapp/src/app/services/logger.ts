import { Injectable } from '@angular/core';

//Treeshaking - Its a compiler option that checks whether the service is referenced anyhwere in the appln
//if not it will remove the code from the bundle.js
@Injectable({
  providedIn: 'root',
})
export class Logger {
  private name: string = "";

  constructor() {
    console.log('Logger Object created');
  }

  setName(nm: string) {
    this.name = nm;
    console.log(`Name is set`);
  }

  getName() {
    console.log(`Name=${this.name}`);
  }
}
