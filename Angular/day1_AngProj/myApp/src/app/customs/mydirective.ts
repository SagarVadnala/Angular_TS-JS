import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
})
export class Mydirective {
    ele = inject(ElementRef); //DI

    @input('appMydirective')
    color : string | undefined;

  // constructor( private ele: ElementRef) {}
  // will give control of element
   constructor() {
    console.log(this.ele.nativeElement)
    this.ele.nativeElement.style.color = "green"
   }
   @HostListener('mouseover')
   onMouseOverCallme(){
    this.ele.nativeElement.style.color =this.color;
   }
    @HostListener('mouseout')
   onMouseOutCallme(){
    this.ele.nativeElement.style.color ='black';
   }
}
