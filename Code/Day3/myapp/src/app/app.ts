import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firstsample } from './firstsample/firstsample';
import { Databinding } from './databinding/databinding';
import { DirectiveSample } from './directive-sample/directive-sample';
import { PipeSample } from './pipe-sample/pipe-sample';

@Component({
  selector: 'app-root',
  imports: [
    Firstsample
    ,Databinding
    ,DirectiveSample
    ,PipeSample
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
}) 
export class App {
  
}
