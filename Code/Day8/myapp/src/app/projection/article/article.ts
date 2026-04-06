import { AfterContentInit, Component, contentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article implements OnInit, AfterContentInit {

  headerContent = contentChild<ElementRef>('header1');

  constructor(){
    
  }

  ngAfterContentInit(): void {
    let header = this.headerContent()?.nativeElement;
    if(header)
    {
      header.style.color = "red";
    }
  }

  ngOnInit(): void {
    
  }


}
