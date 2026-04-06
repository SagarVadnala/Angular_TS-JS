import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firstsample } from './firstsample/firstsample';
import { Databinding } from './databinding/databinding';

@Component({
  selector: 'app-root',
  imports: [
    Firstsample
    ,Databinding
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
}) 
export class App {
  
}
