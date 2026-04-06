import { Component, inject } from '@angular/core';
import { Logger } from '../services/logger';

@Component({
  selector: 'app-firstsample',
  imports: [],
  templateUrl: './firstsample.html',
  styleUrl: './firstsample.css',
})
export class Firstsample {

  loggerService = inject(Logger);

  constructor(){
    this.loggerService.setName("Pradeep" + Math.random());
  }
}
