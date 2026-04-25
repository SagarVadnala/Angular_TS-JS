import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from "./component/data-binding/data-binding";
import { DirectiveSample } from './directive-sample/directive-sample';

@Component({
  selector: 'app-root',
  imports: [
    DataBinding,
    DirectiveSample

],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');
}
