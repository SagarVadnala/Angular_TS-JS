import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  imports: [Header, RouterOutlet],
  templateUrl: './mainlayout.html',
  styleUrl: './mainlayout.css',
})
export class Mainlayout {

}
