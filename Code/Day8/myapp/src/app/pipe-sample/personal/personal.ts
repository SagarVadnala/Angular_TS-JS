import { Component, inject } from '@angular/core';
import { Logger } from '../../services/logger';

@Component({
  selector: 'app-personal',
  imports: [],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class Personal {

  loggerService = inject(Logger);

  constructor(){
    this.loggerService.getName();
  }

}
