import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-userlayout',
  imports: [Header, RouterOutlet],
  templateUrl: './userlayout.html',
  styleUrl: './userlayout.css',
})
export class Userlayout {

}
