import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firstsample } from './firstsample/firstsample';
import { Databinding } from './databinding/databinding';
import { DirectiveSample } from './directive-sample/directive-sample';
import { PipeSample } from './pipe-sample/pipe-sample';
import { Navbar } from "./navbar/navbar";
import { MessageService } from './services/message';

@Component({
  selector: 'app-root',
  imports: [
    Firstsample,
    Databinding,
    DirectiveSample,
    PipeSample,
    RouterOutlet,
    Navbar
],
  templateUrl: './app.html',
  styleUrl: './app.css'
}) 
export class App {

  messageService = inject(MessageService);
  message = signal<string>("");

  constructor(){
    this.messageService.getMessages().subscribe({
      next: (resp) =>{ 
        this.message.set(resp);
        setTimeout(() => {
          this.message.set("");
        }, 2000);
      }
    })
  }

  
}
